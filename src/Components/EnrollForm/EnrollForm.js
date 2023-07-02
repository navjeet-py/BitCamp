import React, {useEffect, useState} from "react";
import "../../assets/css/EnrollForm.css"


const EnrollForm = () => {

    const [name, setName] = useState('');
    const [standard, setStandard] = useState('');
    const [school, setSchool] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        text: "   ",
        color: "white"
    })


    function handleSubmit(e) {
        e.preventDefault();
        if (isSubmitted) {

        } else {
            setSubmitStatus({
                text: "Submitting...",
                color: "var(--blue)"
            })
            setIsSubmitted(true);

        }


    }


    useEffect(() => {
        if (isSubmitted) {
            fetch("/", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: 'form-name=contact-form&name=' + name + '&standard=' + standard + '&school=' + school + '&phone=' + phone
            })
                .then((response) => {
                    if (response.status === 200) {
                        setSubmitStatus({
                            text: "Submitted. We'll contact you soon.",
                            color: "green"
                        })

                        setIsSubmitted(false);
                        setName("");
                        setStandard("");
                        setSchool("");
                        setPhone("");

                    } else {
                        setSubmitStatus({
                            text: "Some error occurred. Please try again.",
                            color: "red"
                        })
                    }

                })

                .catch(() => {
                    setSubmitStatus({
                        text: "Some error occurred. Please try again.",
                        color: "red"
                    })
                    setIsSubmitted(false);
                    setName("");
                    setStandard("");
                    setSchool("");
                    setPhone("");
                })
        }

    }, [isSubmitted])


    return (
        <div className={"enroll-form"}>
            <h1 className={"enroll-form-heading"}>Fill Out This Form</h1>
            <p className={"tagline"}>
                Call or WhatsApp us at <strong>8112283543</strong> / <strong>6200075051</strong>.
                <br/>
                Fill out this form and we will contact you.
            </p>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder={"Name"} value={name} name={"name"}
                       onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder={"Standard"} value={standard} name={"standard"}
                       onChange={(e) => setStandard(e.target.value)}
                />
                <input type="text" placeholder={"School"} value={school} name={"school"}
                       onChange={(e) => setSchool(e.target.value)}
                />
                <input type="number" placeholder={"Phone Number"} value={phone} name={"phone"}
                       onChange={(e) => setPhone(e.target.value)}
                />

                <button type={"submit"}>Submit</button>
            </form>

            <p className={"submit-status"} style={{color: submitStatus.color}}>{submitStatus.text}</p>


        </div>
    )
}


export default EnrollForm;