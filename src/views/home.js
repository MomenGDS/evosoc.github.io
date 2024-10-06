import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hefty Scarce Quail</title>
        <meta property="og:title" content="Hefty Scarce Quail" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-body-small thq-link">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-body-small thq-link">
              #services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-body-small thq-link">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-body-small thq-link">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Learn more about our AI Automation solutions.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Explore our chatbot development and social media integration
              services.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Discover more about our agency and team.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Get in touch with us for a consultation.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              We specialize in creating advanced chatbots for lead generation,
              customer support, and appointment management. Let our AI solutions
              streamline your processes and enhance customer interactions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Boost Your Business with AI Automation
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">Lead Generation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">Customer Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              Appointment Management
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Generate leads effectively through interactive chatbots tailored
              to your business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Enhance customer experience and engagement with AI-powered
              chatbots for customer support.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Automate appointment scheduling and management with our AI
              chatbots.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Take your business to the next level with our cutting-edge AI
              chatbot development services. Streamline lead generation, enhance
              customer support, and optimize appointment management.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Boost Your Business with AI Automation
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Lead Generation Chatbots
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Customer Support Automation
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Appointment Management Solutions
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Develop chatbots that engage with website visitors to capture
              leads and increase conversion rates.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Implement chatbots for instant customer support, resolving queries
              efficiently and enhancing customer satisfaction.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Create chatbots that schedule appointments, send reminders, and
              streamline the booking process for businesses.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Starter Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">
              Professional Plan
            </span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Ultimate Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Enterprise Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Advanced Plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$399/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$299/month</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">$1999/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$499/month</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">$3999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">$1999/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">$2999/year</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">$4999/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Chatbot Development for Lead Generation
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Customer Support Automation
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Appointment Management Integration
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Advanced Chatbot Development for Lead Generation
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Advanced Customer Support Automation
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Advanced Appointment Management Integration
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Advanced Social Media Integration with Instagram, Facebook,
              WhatsApp
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Customized Chatbot Development for Lead Generation
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Customized Customer Support Automation Solutions
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Customized Appointment Management Integration with CRM Systems
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              + Advanced Social Media Integration with Instagram, Facebook,
              WhatsApp, LinkedIn, Twitter, and more
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              + Full-Service Content Creation and Management for Social Media
              Platforms
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Social Media Integration with Instagram, Facebook, WhatsApp
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Content Creation Services for Social Media Pages
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              24/7 Customer Support
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Advanced Content Creation Services for Social Media Pages
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Priority Email Support
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Monthly Strategy Consultation
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              + Dedicated Account Manager and Support Team
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              + Weekly Strategy Sessions and Performance Reports
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              + Priority Phone Support and Emergency Assistance
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">Customization</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">Integration</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">Content Creation</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Schedule a consultation with our experts to discuss your business
              needs and goals for AI chatbot development and social media
              integration.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Our team will customize chatbot solutions tailored to your
              specific requirements for lead generation, customer support, and
              appointment management.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Integrate the chatbot seamlessly with Instagram, Facebook, and
              WhatsApp to enhance your online presence and customer engagement.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Let us handle the creation of engaging content for your social
              media pages to attract and retain customers effectively.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              The team at AI Automation agency is highly skilled and
              professional. They delivered exactly what we needed and exceeded
              our expectations.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              I am impressed with the level of automation and integration
              provided by AI Automation agency. Our social media pages have
              never looked better, thanks to their content creation services.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              AI Automation agency&apos;s chatbot for appointment management has
              saved us valuable time and improved our scheduling efficiency. I
              highly recommend their services.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              The social media integration provided by AI Automation agency has
              helped us reach a wider audience and engage with our customers
              effectively. Their services have been instrumental in our business
              growth.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Working with the AI Automation agency has been a game-changer for
              our business. The chatbot they developed for us has significantly
              increased our lead generation and streamlined our customer support
              process.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              CEO, ABC Company
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              Marketing Manager, XYZ Inc.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Founder, 123 Startup
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Operations Manager, LMN Corporation
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210 thq-heading-3">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211 thq-heading-3">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
