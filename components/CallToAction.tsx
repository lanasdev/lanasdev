import Contactform from "./Contactform";


const CallToAction = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-32 md:flex-row md:items-start md:justify-between">
            <h3 className="text-2xl">Let&apos;s have a chat!</h3>
            <Contactform />
        </div>
    )
}

export default CallToAction;