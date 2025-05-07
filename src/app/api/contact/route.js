import { NextResponse } from 'next/server';

// Function to send email notification (you would implement this with your email service)
async function sendEmailNotification(formData) {
  try {
    // This is a placeholder for your actual email sending logic
    // You could use services like SendGrid, Nodemailer, Amazon SES, etc.
    
    /* Example with SendGrid (you would need to install @sendgrid/mail):
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com',
      from: 'no-reply@yourdomain.com',
      subject: `New Website Inquiry from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Project Type: ${formData.projectType || 'Not specified'}
        Project Details: ${formData.projectDetails}
        Budget: ${formData.budget || 'Not specified'}
        Timeline: ${formData.timeline || 'Not specified'}
        How they heard about you: ${formData.hearAbout || 'Not specified'}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
        <p><strong>Project Details:</strong> ${formData.projectDetails}</p>
        <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
        <p><strong>How they heard about you:</strong> ${formData.hearAbout || 'Not specified'}</p>
      `,
    };
    
    await sgMail.send(msg);
    */
    
    // For now, just log to console
    console.log('Email would be sent with:', { formData });
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
}

// Function to save lead to database (you would implement this with your database)
async function saveLeadToDatabase(formData) {
  try {
    // This is a placeholder for your actual database logic
    // You could use MongoDB, MySQL, Firebase, etc.
    
    /* Example with MongoDB (you would need to install mongodb):
    const { MongoClient } = require('mongodb');
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    
    await client.connect();
    const database = client.db('your-database');
    const leads = database.collection('leads');
    
    const result = await leads.insertOne({
      ...formData,
      createdAt: new Date(),
      status: 'new'
    });
    
    await client.close();
    return result.insertedId;
    */
    
    // For now, just log to console
    console.log('Lead would be saved to database:', { formData });
    return true;
  } catch (error) {
    console.error('Error saving lead to database:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, projectType, projectDetails, budget, timeline, hearAbout } = data;
    
    // Validate required fields
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Process form submission
    const formData = {
      name,
      email,
      phone,
      projectType,
      projectDetails,
      budget,
      timeline,
      hearAbout,
      submittedAt: new Date().toISOString()
    };
    
    // Send email notification
    const emailSent = await sendEmailNotification(formData);
    
    // Save lead to database
    const leadSaved = await saveLeadToDatabase(formData);
    
    // Log for debugging
    console.log('Form submission processed:', { emailSent, leadSaved, formData });
    
    // Return success response
    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling form submission:', error);
    
    return NextResponse.json(
      { 
        message: 'Server error, please try again',
        success: false 
      },
      { status: 500 }
    );
  }
}