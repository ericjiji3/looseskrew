import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'

export default function Footer(){
    const addEmail = async (formData) => {
        'use server'
    
        const email = formData.get('email')
        const supabase = createServerActionClient({ cookies })
        await supabase.from('emails').insert({ email })
        revalidatePath('/')
      }
    return (
        <div className="footer-container">
            <form action={addEmail}>
                <label for="email">Stay up to date with DA$H:</label>
                <input type="text" id="email" name="email"></input>
                <input type="submit" value="Submit"></input>
            </form>
            
        </div>
    )
}