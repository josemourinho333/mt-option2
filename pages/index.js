import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import iconGrowth from '../icons/icons/icon-growth.png';
import iconMegaphone from '../icons/icons/icon-megaphone.png';
import iconShack from '../icons/icons/icon-shack.png';
import iconSuitcase from '../icons/icons/icon-suitcase.png';
import teamCollab from '../images/team\ collaborating-min.jpg';
import meetingRoom from '../images/meeting\ room-min.jpg';
import iconChart from '../icons/icons/icon-chart.png';
import iconDollar from '../icons/icons/icon-dollar.png';
import iconLaptop from '../icons/icons/icon-laptop.png';
import iconMail from '../icons/icons/icon-mail.png';
import iconQuote from '../icons/icons/quotation\ mark.png';
import male from '../images/male\ headshot-min.jpg';
import female from '../images/female\ headshot-min.jpg';

// i would break these up into smaller components but 
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="text-4xl">YOUR SUCCESSFUL WEBSITE TITLE</h1>
        <p className="mt-5">&ldquo;The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.&ldquo; <br/> <i>- Bill Gates</i></p>
      </section>

      <section className="flex flex-col justify-center items-center px-20">
        <div className="flex my-20">
          <div className="flex flex-col justify-between items-center text-center w-[60%] p-5 mx-5">
            <Image 
              src={iconGrowth}
              alt="growth-icon"
              width={80}
              height={80}
            />
            <h3 className="font-semibold text-2xl my-10 px-8">Grow Your Business</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur ullam ex quidem totam ut repellendus adipisci, quasi sapiente doloremque expedita impedit quam consectetur nihil!</p>
          </div>
          <div className="flex flex-col justify-between items-center text-center w-[60%] p-5 mx-5">
            <Image 
              src={iconMegaphone}
              alt="megaphone-icon"
              width={80}
              height={80}
            />
            <h3 className="font-semibold text-2xl my-10 px-8">Get Your Business Noticed</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur ullam ex quidem totam ut repellendus adipisci, quasi sapiente doloremque expedita impedit quam consectetur nihil!</p>
          </div>
          <div className="flex flex-col justify-between items-center text-center w-[60%] p-5 mx-5">
            <Image 
              src={iconShack}
              alt="shack-icon"
              width={80}
              height={80}
            />
            <h3 className="font-semibold text-2xl my-10 px-8">Find Perfect Solution</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur ullam ex quidem totam ut repellendus adipisci, quasi sapiente doloremque expedita impedit quam consectetur nihil!</p>
          </div>
          <div className="flex flex-col justify-between items-center text-center w-[60%] p-5 mx-5">
            <Image 
              src={iconSuitcase}
              alt="suitcase-icon"
              width={80}
              height={80}
            />
            <h3 className="font-semibold text-2xl my-10 px-8">Increase Productivity</h3>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consequatur ullam ex quidem totam ut repellendus adipisci, quasi sapiente doloremque expedita impedit quam consectetur nihil!</p>
          </div>
        </div>

        <div className="flex w-[95%] p-20 gap-28">
          <div className="basis-1/2">
            <Image 
                src={teamCollab}
                alt="team-collab"
                width={0}
                height={0}
              />
          </div>
          <div className="basis-1/2 flex flex-col">
            <h2 className="font-semibold text-2xl">Goals We Can Help You Achieve</h2>
            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nostrum cumque modi maiores iste illum quae ullam aspernatur itaque consectetur molestiae, recusandae dicta, quod et iusto excepturi reiciendis maxime quidem quo ex voluptatibus repellat culpa qui iure. Totam ipsa nesciunt, vero a iste eum ad suscipit incidunt aspernatur magnam nihil.</p>
          </div>
        </div>

        <div className="flex flex-row-reverse w-[95%] p-20 gap-28">
          <div className="basis-1/2">
            <Image 
                src={meetingRoom}
                alt="team-collab"
                width={0}
                height={0}
              />
          </div>
          <div className="basis-1/2 flex flex-col">
            <h2 className="font-semibold text-2xl">It All Starts With Strategy</h2>
            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nostrum cumque modi maiores iste illum quae ullam aspernatur itaque consectetur molestiae, recusandae dicta, quod et iusto excepturi reiciendis maxime quidem quo ex voluptatibus repellat culpa qui iure. Totam ipsa nesciunt, vero a iste eum ad suscipit incidunt aspernatur magnam nihil.</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="flex flex-col text-white items-start p-[6rem]">
          <h2 className="text-3xl font-semibold">LET&apos;S CREATE SOMETHING GREAT TOGETHER</h2>
          <p className="my-[1rem] w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea autem maiores laboriosam velit soluta voluptatum in aperiam saepe. Debitis fugiat animi sapiente error quae! Ipsa voluptates praesentium provident repellat excepturi!</p>
          <button className="font-semibold text-lg my-[1.5rem] px-7 py-1 bg-transparent rounded-md border-2 border-white">CONTACT US</button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-20">
        <div className="flex w-[95%] p-20 gap-28">
          <div className="basis-1/2 flex flex-wrap">
            <div className="flex flex-col justify-between items-center basis-1/2 mb-[2rem]">
              <Image src={iconChart} width={100} height={100} alt='chart-icon'/>
              <div className="text-xl font-bold text-[#8a6b52] mt-[1rem]">75% GROWTH</div>
            </div>
            <div className="flex flex-col justify-between items-center basis-1/2 mb-[2rem]">
              <Image src={iconDollar} width={100} height={100} alt='dollar-icon'/>
              <div className="text-xl font-bold text-[#8a6b52] mt-[1rem]">115% PROFIT</div>
            </div>
            <div className="flex flex-col justify-between items-center basis-1/2 mb-[2rem]">
              <Image src={iconLaptop} width={100} height={100} alt='laptop-icon'/>
              <div className="text-xl font-bold text-[#8a6b52] mt-[1rem]">32% SAVINGS</div>
            </div>
            <div className="flex flex-col justify-between items-center basis-1/2 mb-[2rem]">
              <Image src={iconMail} width={100} height={80} alt='mail-icon'/>
              <div className="text-xl font-bold text-[#8a6b52] mt-[1rem]">24/7 SUPPORT</div>
            </div>
          </div>
          <div className="basis-1/2 self-center flex flex-col">
            <h2 className="font-semibold text-2xl">We&apos;ll Help You Create a Plan</h2>
            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nostrum cumque modi maiores iste illum quae ullam aspernatur itaque consectetur molestiae, recusandae dicta, quod et iusto excepturi reiciendis maxime quidem quo ex voluptatibus repellat culpa qui iure. Totam ipsa nesciunt, vero a iste eum ad suscipit incidunt aspernatur magnam nihil.</p>
          </div>
        </div>

        <div className="flex px-20">

          <div className="basis-1/2 flex flex-col px-20 mb-20">
            <h2 className="text-2xl font-semibold">Testimonial</h2>
            <div className="mt-10 relative px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id ad, saepe natus laborum exercitationem, ratione itaque iusto esse laudantium sunt quia voluptas qui magnam laboriosam et dignissimos dicta odit?
              <div className={`${styles.quote} w-[50px] rotate-180 aboslute top-0 right-0`}>
                <Image src={iconQuote} alt="quotation" width={0} height={0}/>
              </div>
            </div>
  
            <div className="flex w-full items-center my-10 px-3">
              <Image src={female} width={100} height={100} alt="female" className="rounded-full object-cover"/>
              <div className="flex flex-col ml-5">
                <h3 className="font-semibold">Jane Doe</h3>
                <p>CEO, Business Solutions</p>
              </div>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col px-20">
            <h2 className="text-2xl font-semibold">Testimonial</h2>
            <div className="mt-10 relative px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam id ad, saepe natus laborum exercitationem, ratione itaque iusto esse laudantium sunt quia voluptas qui magnam laboriosam et dignissimos dicta odit?
              <div className={`${styles.quote} w-[50px] rotate-180 aboslute top-0 right-0`}>
                <Image src={iconQuote} alt="quotation" width={0} height={0}/>
              </div>
            </div>
  
            <div className="flex w-full items-center my-10 px-3">
              <Image src={male} width={100} height={100} alt="male" className="rounded-full object-cover"/>
              <div className="flex flex-col ml-5">
                <h3 className="font-semibold">Jane Doe</h3>
                <p>CEO, Business Solutions</p>
              </div>
            </div>
          </div>

        </div>
        

      </section>

      <section className={styles.end}>
        <h1 className="text-4xl">LET&apos;S BRING IT TO THE NEXT LEVEL</h1>
        <p className="mt-5">We&apos;re here to guide you in the right direction when it comes to improving technology and growing your business.</p>
        <button className="font-semibold text-lg my-[1.5rem] px-7 py-1 bg-transparent rounded-md border-2 border-white">START TODAY</button>
      </section>
    </>
  )
}
