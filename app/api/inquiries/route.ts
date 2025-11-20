import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { inquirySchema } from '@/lib/validations/inquiry'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = inquirySchema.parse(body)

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('inquiries')
      .insert([validatedData])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // TODO: Send email notification

    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation error', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
