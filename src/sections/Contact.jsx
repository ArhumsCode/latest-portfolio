import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({name: "",
        email: '',
        message: ''
     })
     const handleChange = ({target: {name , value}}) => {
        setForm({...form, [name]: value})

     };
     //service_4bbnopf
     const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
   
         await emailjs.send('service_4bbnopf', 
                    'template_z7dz4zg',
                    {from_name: form.name,
                        from_email: form.email,
                        message: form.message,
                        my_email: "arhumfaysal07@gmail.com"
                    },
                "e76c0Gl89LxG31pnc");
        
        setLoading(false);
        alert("Thank you! Your message has been sent!")
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.')


        }


     };


  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <h3 className="head-text xl:mt-4" >Contact Me</h3>
        <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen sm:block hidden" />
        <div className="contact-container">
            <h3 className='head-text'>  Let's talk </h3>
            <p className='text-lg text-white-600'>
                Whether you're looking to build a new website, work together on a project, or
                need some tutoring in mathematics I'm here and ready to work on it!

            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-5">
                 <label className="space-y-3">
                    <span className="field-label">
                        Full Name

                    </span>
                    <input type="text"
                            name="name"
                            value={form.name}
                             onChange={handleChange}
                             required
                             className='field-input'
                             placeholder='Bob Jones' />
                </label>
              
              
                <label className="space-y-3">
                    <span className="field-label">
                        Email

                    </span>
                    <input type="text"
                            name="email"
                            value={form.email}
                             onChange={handleChange}
                             required
                             className='field-input'
                             placeholder='abcd@domain.com' />
                </label>

                <label className="space-y-3">
                    <span className="field-label">
                       Your  Message

                    </span>
                    <textarea 
                            name="message"
                            value={form.message}
                             onChange={handleChange}
                             required
                             rows={5}
                             className='field-input'
                             placeholder="Hi I'm gonna give you a job..." />
                </label>
                <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending..' : "Send Message" }
                    <img src="/assets/arrow-up.png" alt="arrow_up" className="field-btn_arrow" />

                </button>





            </form>

        </div>
        </div>

    </section>
  )
}

export default Contact