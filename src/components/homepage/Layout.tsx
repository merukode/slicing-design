import React from 'react'
import profile from '/profile.svg'
import setting from '/setting.svg'
import template from '/template.svg'
import yellow from '/yellow-massage.svg'
import arrow from '/arrow.svg'
import { Card } from '../ui/card'
import { Progress } from '../ui/progress'
// import * as Progress from '@radix-ui/react-progress'


function Layout() {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(40), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <main className='w-screen'>
            {/* Navbar */}
            <section className='bg-[#01C8B1] p-2 '>
                <span className='flex gap-11  justify-end'>
                    <img src={profile} alt="profile" />
                    <img src={setting} alt="profile" />
                    <img src={template} alt="profile" />
                    <div className='flex gap-2 rounded-xl p-4 bg-[#BAFEF6]'>
                        <img src={profile} alt="profile" />
                        <p className='text-[#01c8b1]'>Jasmine J</p>
                    </div>
                </span>
            </section>
            {/* Hero Section */}
            <section style={{ backgroundImage: 'url(/background.png)' }} className='bg-cover bg-center w-full p-10'>
                <h1 className='underline text-5xl'>Here's What All <br /> You Need</h1>
                <div className='mt-24 flex justify-between'>
                    <Card className='w-96 p-3'>
                        <span className='flex justify-between mb-8'>
                            <img src={yellow} alt="yellow" />
                            <img src={arrow} alt="arrow" />
                        </span>
                        <h1 className='font-bold'>MESSAGE BANDWIDTH</h1> 
                        <Progress value={progress} className='w-[60p%] mb-8 mt-5' />
                        <span className='flex justify-between'>
                            <p>20 Messages</p>
                            <p>/100</p>
                        </span>
                    </Card>

                    {/* card 2 */}
                    <Card className='w-96 p-3'>
                        <span className='flex justify-between mb-8'>
                            <img src={yellow} alt="yellow" />
                            <img src={arrow} alt="arrow" />
                        </span>
                        <h1 className='font-bold'>BROADCAST MESSAGE</h1> 
                        <Progress value={progress} className='w-[60p%] mb-8 mt-5' />
                        <span className='flex justify-between'>
                            <p>20 Messages</p>
                        </span>
                    </Card>

                    {/* card 3 */}
                    <Card className='w-96 p-3'>
                        <span className='flex justify-between mb-8'>
                            <img src={yellow} alt="yellow" />
                            <img src={arrow} alt="arrow" />
                        </span>
                        <h1 className='font-bold'>CONVERSATION</h1> 
                        <Progress value={progress} className='w-[60p%] mb-8 mt-5' />
                        <span className='flex justify-between'>
                            <p>20 Messages</p>
                        </span>
                    </Card>

                    {/* card 4 */}
                    <Card className='w-96 p-3'>
                        <span className='flex justify-between mb-8'>
                            <img src={yellow} alt="yellow" />
                            <img src={arrow} alt="arrow" />
                        </span>
                        <h1 className='font-bold'>OUTBBOND MESSAGE</h1> 
                        <Progress value={progress} className='w-[60p%] mb-8 mt-5' />
                        <span className='flex justify-between'>
                            <p>20 Messages</p>
                        </span>
                    </Card>
                </div>
            </section>

        </main>
    )
}

export default Layout