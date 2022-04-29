import Script from "next/script";
import Head from "next/head";
import { useState, useEffect } from "react";


function Contactform() {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            alert("Thank you for contacting us! We will get back to you as soon as possible.");
        }
    }, [submitted]);

    const contactme = async event => {
        event.preventDefault()

        const res = await fetch('/api/sendform', {
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        setSubmitted(true)

        const result = await res.json()
        // result.user => 'Ada Lovelace'
        // console.log(result.name, result.email, result.message);

    }

    return (
        <>
        <a href="#contact"></a>
            <form onSubmit={contactme} className="flex flex-col w-1/3 mx-auto">
                <section className="flex flex-col py-2 mx-4">
                    <label htmlFor="name" className="mr-4">Name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required className="form-input text-black" />
                </section>
                <section className="flex flex-col py-2 mx-4">
                    <label htmlFor="email" className="mr-4">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className="form-input text-black" />
                </section>
                <section className="flex flex-col py-2 mx-4">
                    <label htmlFor="message" className="mr-4">Message</label>
                    <textarea id="message" name="message" autoComplete="message" required className="form-textarea text-black" />
                </section>
                {/* <section>
                <label className="mr-4">Type of Project: </label>
                <div className="border-2">
                    <input type="radio" name="Website" id="website" className="form-radio" />
                    <label htmlFor="website" className="form-radio-label">Website</label>
                </div>
                <div className="border-2">
                    <input type="radio" name="Landing" id="landing" className="form-radio" />
                    <label htmlFor="landing" className="form-radio-label">Landing Page</label>
                </div>
                <div className="border-2">
                    <input type="radio" name="Ecommerce" id="ecommerce" className="form-radio" />
                    <label htmlFor="ecommerce" className="form-radio-label">Ecommerce</label>
                </div>
            </section> */}

                <button type="submit" className={submitted ? 'font-medium p-4 mt-8 bottom-2 border-green-500 hover:border-green-600' : 'font-medium p-4 mt-8 border-2 border-yellow-500 hover:border-yellow-600 '}  >{submitted ? 'Done!' : 'Submit!'}</button>
                {/* {useEffect(() => {
                    if (submitted) {
                        return (
                            <button type="submit" className={'font-medium p-4 mt-8 bottom-2 border-green-500 hover:border-green-600'}  > {'Done!'} </button>

                        )
                    } else {
                        return (
                            <button type="submit" className={'font-medium p-4 mt-8 border-2 border-yellow-500 hover:border-yellow-600 '}  > {'Submit!'} </button>

                        )

                    }
                } */}
                {/* <button type="reset" onClick={(event) => {
                    // event.target.reset()
                    setSubmitted(false)
                }} className="p-4 border hover:shadow-md" >Reset Form
                </button> */}
            </form>
            {/* {submitted && <p className="text-green-500">Submitted & Done!</p>} */}
        </>

    )
}

export default Contactform