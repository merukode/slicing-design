import React from 'react'
import profile from '/profile.svg'
import setting from '/setting.svg'
import template from '/template.svg'
import yellow from '/yellow-massage.svg'
import arrow from '/arrow.svg'
import green from '/green-arrow.svg'
import phone from '/phone-green.svg'
import profile1 from '/profile1.png'
import profile2 from '/profile2.png'
import { Card } from '../ui/card'
import { Progress } from '../ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Timeline from './Timeline'
import DraggableBox from './DraggableBox'
import { Badge } from '../ui/badge'
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
                    <img className='fill-white' src={profile} alt="profile" />
                    <img src={setting} alt="profile" />
                    <img src={template} alt="profile" />
                    <div className='flex items-center gap-2 rounded-full p-4 bg-[#BAFEF6]'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>JJ</AvatarFallback>
                        </Avatar>
                        <p>Jasmine J</p>
                    </div>
                </span>
            </section>
            {/* Hero Section */}
            <section style={{ backgroundImage: 'url(/background.png)' }} className='bg-cover bg-center w-full p-10'>
                <h1 className='underline text-5xl font-bold font'>Here's What All <br /> You Need</h1>
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
                            <p>20 Conversation</p>
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
                            <p>35% Percent</p>
                        </span>
                    </Card>
                </div>
            </section>
            {/* Below Section */}
            <section className='px-8 py-5 mb-14'>
                {/* Messaging Header */}
                <span className='flex gap-5'>
                    <h1 className='text-2xl font-bold'>Messaging</h1>
                    <img src={green} alt="Green arrow" />
                </span>
                <div className='flex gap-14 mt-10'>
                    <article className='border-2 shadow-4xl rounded-md border-black p-5'>
                        <h2 className='mb-5 text-xl'>Recent Message Sent</h2>
                        <Timeline />
                    </article>
                    <article className='border-2 shadow-4xl w-full rounded-md border-black p-5'>
                        <DraggableBox />
                    </article>
                </div>
                {/* Devices Header */}
                <span className='flex gap-5'>
                    <h1 className='text-2xl my-10 font-bold'>Messaging</h1>
                    <img src={green} alt="Green arrow" />
                </span>
                <div className='flex gap-10'>
                    <article className='border-2 shadow-4xl rounded-md border-black p-5 w-full h-64'>
                        <h2>Device Status</h2>
                        <span>
                            <div className='flex my-3 gap-4 items-center'>
                                <img src={phone} alt="phone" />
                                <p>Ikhsan's Device 1</p>
                                <Badge className='bg-green-400 rounded-md p-2'>Connected</Badge>
                            </div>
                             <hr/>
                             <div className='flex my-3 gap-4 items-center'>
                                <img src={phone} alt="phone" />
                                <p>Nancy's Device 1</p>
                                <Badge className='bg-red-400 rounded-md p-2'>Disconnected</Badge> 
                            </div>
                             <hr/>
                             <div className='flex my-3 gap-4 items-center'>
                                <img src={phone} alt="phone" />
                                <p>Juan's Device 1</p>
                                <Badge className='bg-green-400 rounded-md p-2'>Connected</Badge>
                            </div>
                        </span>
                    </article>
                    <article className='border-2 shadow-4xl rounded-md border-black p-5 w-full h-64'>
                        <h2>Database Customer</h2>
                        <span>
                        <div className='flex my-3 gap-4 items-center'>
                                <img src={profile1} alt="profile" />
                                <p>Gretchen Stanton</p>
                                <Badge className='bg-green-400 rounded-md p-2'>Verified</Badge>
                            </div>
                             <hr/>
                             <div className='flex my-3 gap-4 items-center'>
                                <img src={profile2} alt="profile" />
                                <p>Carter Workman</p>
                                <Badge className='bg-red-400 rounded-md p-2'>Unverified</Badge> 
                            </div>
                        </span>
                    </article>
                </div>
            </section>
            {/* Footer */}
            <footer className='bg-gray-500 px-6 py-8 flex justify-between text-white'>
                <p>Copyright@2021 WhatsTrack.com</p>
                <p>Powered By Zegen.id</p>
            </footer>
        </main>
    )
}

export default Layout