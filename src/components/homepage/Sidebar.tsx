import react from 'react'
import {Badge} from '../ui/badge'
import {Card} from '../ui/card'
import overview from '/overview.svg'
import analitik from '/analitik.svg'
import attach from '/attach.svg'
import member from '/member.svg'
import profile from '/profile.svg'
import api from '/api.svg'
import schedule from '/schedule.svg'
import send from '/send.svg'
import setting from '/setting.svg'
import template from '/template.svg'
import customer from '/customer.svg'
import broadcast from '/broadcast.svg'
import reply from '/reply.svg'
import invoices from '/invoice.svg'


const Sidebar: React.FC = () => {
    return (
      <div className="w-72 bg-gray-100 p-4 shadow-md">
        {/* Sidebar Title */}
        <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-bold mb-4">WhatsTrack</h1>
        
        {/* Pro Badge */}
        <Badge className="rounded-full border-yellow-500 border-2 text-yellow-500 px-2 py-1 mb-4">
          Pro
        </Badge>
        </div>
  
        {/* Billing Expiration Card */}
        <Card className="bg-red-600 p-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">Billing Expiration</span>
            <button className="text-white font-bold">X</button>
          </div>
          <p className="text-white mt-2">
            Your billing is about expired in 3 days. Soon your account will be unactivated.
          </p>
        </Card>

        {/* Dashboard Card */}

        <section>
            <p>Dashboard</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={overview} alt="overview" />
                        <span>Overview</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={analitik} alt="analitik" />
                        <span>Analytics</span>
                    </li>
                </ul>
            </div>
            <p>Devices</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={attach} alt="attach" />
                        <span>Attached Devices</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={customer} alt="customer" />
                        <span>Customer Devices</span>
                    </li>
                </ul>
            </div>
            <p>Messaging</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={template} alt="template" />
                        <span>Templating</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={send} alt="send message" />
                        <span>Send Message</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={reply} alt="auto reply" />
                        <span>Auto Reply</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={broadcast} alt="Broadcast" />
                        <span>Broadcast</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={schedule} alt="Schedule" />
                        <span>Scheduler</span>
                    </li>
                </ul>
            </div>
            <p>Member</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={member} alt="Membebr plann" />
                        <span>Member Plan</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={invoices} alt="Invoices" />
                        <span>Invoices</span>
                    </li>
                </ul>
            </div>
            <p>Profile</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={profile} alt="Profile" />
                        <span>Profile</span>
                    </li>
                    <li className='flex gap-4'>
                        <img src={setting} alt="Setting" />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
            <p>API Documentation</p>
            <div>
                <ul className='ml-10 mt-3 flex flex-col gap-4'>
                    <li className='flex gap-4'>
                        <img src={api} alt="Api" />
                        <span>API Documentation</span>
                    </li>
                </ul>
            </div>
        </section>
      </div>
    );
  };
  
  export default Sidebar;