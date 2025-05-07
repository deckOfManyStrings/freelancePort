'use client';

import { useState } from 'react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    hearAbout: ''
  });
  
  // Form state: errors, submission status, and loading state
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Please provide some details about your project';
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional field)
    if (formData.phone.trim()) {
      const phoneRegex = /^(\+\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status
    setStatus({ type: '', message: '' });
    
    // Validate form
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fix the errors in the form.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setStatus({ 
          type: 'success', 
          message: 'Thank you for your inquiry! I will review your project details and get back to you within 24-48 hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          projectDetails: '',
          budget: '',
          timeline: '',
          hearAbout: ''
        });
      } else {
        // API error
        setStatus({ 
          type: 'error', 
          message: data.message || 'Something went wrong. Please try again or contact me directly via email.'
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Unable to submit the form. Please check your internet connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      {/* Status message */}
      {status.message && (
        <div 
          className={`p-4 rounded-lg ${
            status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 
            'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}
      
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name <span className="text-red-600">*</span>
        </label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>
      
      {/* Email field */}
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email <span className="text-red-600">*</span>
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>
      
      {/* Phone field (optional) */}
      <div>
        <label htmlFor="phone" className="block mb-2 font-medium">
          Phone Number <span className="text-gray-500 text-sm">(optional)</span>
        </label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>
      
      {/* Project Type dropdown */}
      <div>
        <label htmlFor="projectType" className="block mb-2 font-medium">
          Project Type <span className="text-gray-500 text-sm">(optional)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a project type</option>
          <option value="business-website">Business Website</option>
          <option value="ecommerce">E-Commerce Store</option>
          <option value="landing-page">Landing Page</option>
          <option value="web-application">Web Application</option>
          <option value="website-redesign">Website Redesign</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Project Details textarea */}
      <div>
        <label htmlFor="projectDetails" className="block mb-2 font-medium">
          Project Details <span className="text-red-600">*</span>
        </label>
        <textarea 
          id="projectDetails"
          name="projectDetails"
          rows="4"
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Please describe your project, goals, and any specific requirements..."
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            ${errors.projectDetails ? 'border-red-500' : 'border-gray-300'}`}
          aria-invalid={errors.projectDetails ? 'true' : 'false'}
          aria-describedby={errors.projectDetails ? 'projectDetails-error' : undefined}
        ></textarea>
        {errors.projectDetails && (
          <p id="projectDetails-error" className="mt-1 text-sm text-red-600">
            {errors.projectDetails}
          </p>
        )}
      </div>
      
      {/* Two columns for Budget and Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget dropdown */}
        <div>
          <label htmlFor="budget" className="block mb-2 font-medium">
            Budget Range <span className="text-gray-500 text-sm">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-3000">$1,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-plus">$10,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        
        {/* Timeline dropdown */}
        <div>
          <label htmlFor="timeline" className="block mb-2 font-medium">
            Timeline <span className="text-gray-500 text-sm">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select preferred timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-month">Within 1 month</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-plus-months">3+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      
      {/* How did you hear about me? */}
      <div>
        <label htmlFor="hearAbout" className="block mb-2 font-medium">
          How did you hear about me? <span className="text-gray-500 text-sm">(optional)</span>
        </label>
        <select
          id="hearAbout"
          name="hearAbout"
          value={formData.hearAbout}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Please select</option>
          <option value="search">Google or other search engine</option>
          <option value="social">Social media</option>
          <option value="referral">Referral from a friend/colleague</option>
          <option value="directory">Online directory</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Submit button */}
      <button 
        type="submit" 
        className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}