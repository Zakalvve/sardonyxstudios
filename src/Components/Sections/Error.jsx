import Container from "../UI/Container";
import { Caption, Paragraph } from "../UI/Text";

const Error = () => {
    return (
        <section id="error" className="bg-space-600 relative z-10 flex min-h-screen w-full flex-col items-center">
                <Container>
                    <div className='flex min-h-screen flex-col items-center justify-center text-center'>
                        <Caption themeColor='neon-red'>Oops!</Caption>
                        <Paragraph>Something went wrong. Consider submitting an <a className='text-neon-green underline cursor-pointer' href="https://github.com/Zakalvve/sardonyxstudios/issues">issue</a> and I'll try and get on it.</Paragraph>
                    </div>
                </Container>
        </section>
    );
}

export default Error;