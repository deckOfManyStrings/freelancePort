import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, project } = data;
    
    // Validate the data
    if (!name || !email || !project) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Here you would normally send an email or save to a database
    // For now, we'll just log it
    console.log('Form submission:', { name, email, project });
    
    // In a real application, you would add code here to:
    // 1. Send yourself an email notification
    // 2. Store the lead in a database
    // 3. Integrate with a CRM if needed
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling form submission:', error);
    
    return NextResponse.json(
      { message: 'Server error, please try again' },
      { status: 500 }
    );
  }
}