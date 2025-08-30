import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Email service using Supabase Edge Functions
export const sendContactEmail = async (data: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}