import React from 'react'
import { Footer } from '../components/Footer'
import { NavBarHome } from '../components/HomePage/NavBarHome'
import { HeroSection } from '../components/HomePage/HeroSection'
import { AboutSection } from '../components/HomePage/AboutSection'
import { CauseComponent } from '../components/HomePage/CauseComponent'
import { HelpSection } from '../components/HomePage/HelpSection'
import { VolunteersSection } from '../components/HomePage/VolunteersSection'
import { TestimonialsSection } from '../components/HomePage/TestimonialsSection'
import { BlogHelpSection } from '../components/HomePage/BlogHelpSection'
import { DonorsSection } from '../components/HomePage/DonorsSection'
import { SocialsSection } from '../components/HomePage/SocialsSection'

export const HomePage = () => {
    return (
        <div>
            <div className="page-wrapper">
                <NavBarHome />
                <HeroSection />
                <AboutSection />
                <CauseComponent />
                <HelpSection />
                <VolunteersSection />
                <TestimonialsSection />
                <BlogHelpSection />
                <DonorsSection />
                <SocialsSection />

                {/* <section className="subscribe">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-4">
                                <h2 className="subscribe__title">Subscribe.</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="subscribe-form" action="javascript:void(0);">
                                    <input className="subscribe-form__input" type="email" name="email" placeholder="Enter your E-mail" required />
                                    <input className="subscribe-form__submit" type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>
        </div>
    )
}
