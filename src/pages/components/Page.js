
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope } from 'react-icons/fa'
import StaggeredList from "./StaggeredList";



const Section = (props) => {
    const { children } = props;
  
    return (
        <section className="flex items-center w-screen h-screen">
            <motion.div 
                className="container mx-auto max-w-6xl px-4 text-white"
                initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 0.5,
                    },
                  }}
            >  
                    {children}
            </motion.div>
        </section>
    )
}

export const Page = (props) => {
    const { onSectionChange } = props
  
    return (
        <>
            <Header onSectionChange={onSectionChange} />
            <About />
            <Developer />
            <Designer />
            <Experience />
            <Contact />
        </>
    )
}

const Header = (props) => {
    const { onSectionChange } = props
    return (    
            <Section>
                <div className="max-w-lg backdrop-blur-md rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-display mb-2">Casey van Roose</h1>
                    <motion.h2  initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                        duration: 1.2,
                        delay: 1.4,
                        },
                    }}
                    className="text-4xl md:text-5xl font-display">Web Developer and Graphic Designer</motion.h2>
                    <motion.div 
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                        duration: 1,
                        delay: 1.8,
                        },
                    }}
                    className="flex mt-2 gap-4" mt={6} gap={'24px'}>
                        <div onClick={() => onSectionChange(2)} className='text-base md:text-xl font-body underlined'>Skills</div>
                        <div onClick={() => onSectionChange(4)} className='text-base md:text-xl font-body underlined'>Work Experience</div>
                        <div onClick={() => onSectionChange(5)} className='text-base md:text-xl font-body underlined'>Contact</div>
                    </motion.div>
                </div>
            </Section>
    )
}

const About = () => {
    return (   
        <Section>
            <div className="flex flex-col md:flex-row gap-8 items-center col">
                <div className="md:w-1/2 backdrop-blur-md rounded-lg">
                    <h2 className="text-4xl md:text-5xl font-display mb-2">About me</h2>
                    <p className="text-base md:text-xl font-body">Hello there! I'm a London-based web developer with a passion for crafting captivating digital experiences. With a versatile skill set and a background in graphic design, I blend cutting-edge technology with stunning visuals to create flawless websites and apps.</p>
                </div>
                <div className='md:w-1/2'>
                    <Image src='/images/headshot.jpg' alt='caseys headshot' width={405} height={405} />
                </div>
            </div>
        </Section>   
    )
}

const Developer = () => {
    return (
        <Section>
            <div className="flex md:gap-8 items-center">
                <div className="w-0 md:w-1/2"></div>
                <div className="w-full md:w-1/2">
                    <div className="text-white max-w-lg backdrop-blur-md rounded-lg">
                        <h2 className="text-4xl md:text-5xl font-display mb-4">Web developer</h2>
                        <p className="text-base md:text-xl font-body  mb-4" >My passion lies in crafting aesthetically pleasing and highly functional apps and websites. With a diverse skill set that encompasses various languages and tools, I  believe in selecting the best tech for the job.</p>
                        <p className="text-base md:text-xl font-body font-bold">Languages</p>
                        <div>
                            <StaggeredList list={['HTML', 'CSS', 'SASS', 'JavaScript', 'Ruby', 'PHP']} />
                        </div>
                        
                        <p className="text-base md:text-xl font-body font-bold">Tools</p>
                        <div>
                            <StaggeredList list={ ['React', 'Redux', 'Ruby on Rails', 'Wordpress', 'Node']}/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
const Designer = () => {
    return (
        <Section>
            <div py={'184px'}>
                <div className="flex md:gap-8 items-center">
                    <div className="w-0 md:w-4/12 flex-initial"></div>
                    <div className="w-full md:w-7/12 flex-initial backdrop-blur-md rounded-lg">
                        <h2 className="text-4xl md:text-5xl font-display mb-4">Designer</h2>
                        <p className="text-base md:text-xl font-body  mb-4">I like to design clean and focused user interfaces. Great user experience begins with simplicity and clarity. By utilising established design patterns, I strive to create apps and websites that make navigation intuitive and interactions enjoyable.</p>
                        <p className="text-base md:text-xl font-body font-bold">Design skills</p>
                        
                        <StaggeredList list={['UI','UX','Websites','Apps','Logos']} />
                       
                        <p className="text-base md:text-xl font-body  mb-2 font-bold">Tools</p>
                        <StaggeredList list={['Figma', 'Sketch', 'Photoshop', 'Illustrator', 'After Effects']}/>
                    </div>
                    <div className="w-0 md:w-4/12 flex-initial"></div>
                </div>
            </div>
        </Section>
    )
}

const Experience = () => {
    return (
        <Section>
            <div className="w-full md:w-7/12 backdrop-blur-md rounded-lg">
            <h2 className="text-4xl md:text-5xl font-display mb-4">Recent work experience</h2>
            <p className="text-base md:text-xl font-body font-bold mb-2">Web developer - Fiora</p>
                <motion.div initial={{
                        opacity: 0, width: '0%'
                    }}
                    whileInView={{
                        opacity: 1, width: '100%',
                        transition: {
                        duration: 1,
                        delay: 1,
                        },
                    }}>
                    <hr></hr>
                    </motion.div>
                <p className="text-sm md:text-base font-body mt-2 mb-2">February 2019 - September 2023 </p>
                <p className="text-base md:text-xl font-body mb-4">Created and maintained cutting-edge websites and web applications for the agencies various clients. I collaborated closely with the design and project management teams to turn creative visions into functional and user-friendly online experiences.</p>
            </div>
        </Section>
    )
}
const Contact = () => {
    return (
        <Section>
            <div className="max-w-lg text-center mx-auto backdrop-blur-md rounded-lg">
                <h2 className="text-4xl md:text-5xl font-display mb-4">Get in touch</h2>
                <p className="text-base md:text-xl font-body  mb-2">If you would like to know more information or want to see some of my recent work please <a className="underline" href='mailto:kcvanroose@gmail.com'>email me</a></p>
                    <motion.div className="flex justify-center"
                    initial={{
                        opacity: 0, y: 100
                    }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                        duration: 1,
                        delay: 1,
                        },
                    }}>
                        <a href='mailto:kcvanroose@gmail.com'>
                            <FaEnvelope style={{ fontSize: '3rem' }} />
                        </a>
                    </motion.div>
            </div>
        </Section>
    )
}

