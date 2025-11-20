import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search') || ''
    const province = searchParams.get('province') || ''
    const featured = searchParams.get('featured') === 'true'

    const supabase = await createClient()

    let query = supabase
      .from('properties')
      .select('*, category:categories(*), images:property_images(*)', { count: 'exact' })
      .eq('status', 'published')
      .order('created_at', { ascending: false })

    // Apply filters
    if (search) {
      query = query.ilike('title', `%${search}%`)
    }

    if (province) {
      query = query.eq('province', province)
    }

    if (featured) {
      query = query.eq('featured', true)
    }

    // Pagination
    const from = (page - 1) * limit
    const to = from + limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      data,
      total: count || 0,
      page,
      limit,
      total_pages: Math.ceil((count || 0) / limit),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
