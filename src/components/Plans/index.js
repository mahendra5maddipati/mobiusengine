const Plans = () => {
    return (
        <div id="plans" className="plans-container">
            <h1>Job Application Service Plans</h1>
            <div>
                <div>
                    <p>April Promo</p>
                    <p>$35/week</p>
                    <hr />
                    <ul>
                        <li>Curated jobs from 1M+ listings, refreshed every 48 hours</li>
                        <li>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</li>
                        <li>Need more? Add extra apps for just $1.5 each</li>
                        <li>Your own dedicated application analyst</li>
                        <li>Personalized with up to 10 filters & 5 job titles</li>
                    </ul>
                    <button className="">Get Started</button>
                </div>
                <div>
                    <div>
                        <p>Starter</p>
                        <p>Popular</p>
                    </div>
                    <p>$35/week</p>
                    <hr />
                    <ul>
                        <p>All the perks of the Promo Plan, plus:</p>
                       <li>Resume review & story-focused feedback</li>
                       <li>Dedicated search specialist</li>
                       <li>Up to 50 job apps/week</li>
                       <li>Extra apps at $1.5 each</li>
                       <li>Analyst support within 6 hours (SLA/PST hours)</li>
                    </ul>
                    <button className="">Get Started</button>
                </div>
                <div>
                    <p>Plus</p>
                    <p>$100/week</p>
                    <hr />
                    <ul>
                        <p>Everything in Starter, with more muscle:</p>
                        <li>Up to 75 apps/week</li>
                        <li>Apply to 15 job titles</li>
                        <li>Analyst + full application team on Pacific hours</li>
                    </ul>
                    <button className="">Get Started</button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1>Advance</h1>
                        <p>Top-tier support for serious job hunters</p>
                    </div>
                    <div>
                        <p>$150/week</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <ul>
                            <li>Everything in Plus</li>
                            <li>Custom Resumes & Cover Letters</li>
                            <li>20 fully customized applications/week</li>
                            <li>Help with complex job searches</li>
                            <li>Access to senior resume experts, Founder & Exec Coaches</li>
                        </ul>
                    </div>
                    <div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <hr />
            <h1>Resume Building & Coaching</h1>
            <p>Let’s talk about where you’re headed — and how your resume can get you there.<br/>Schedule a call to get started.</p>
            <div>
                <div>
                    <h1>Resume Building</h1>
                    <p>Crafted for senior to VP-level professionals ready for their next big step.</p>
                    <p>$1000 one time</p>
                    <hr />
                    <ul>
                        <li>3× 30-min coaching </li>
                        <li>Focused on storytelling, not just formatting</li>
                        <li>Analyst + full application team on Pacific hours</li>
                        <li>Tailored to your target industry, company, or role</li>
                        <li>Direct work with our co-founder (ex-Google, JP Morgan)</li>
                        <li>Executive coaching from UC Berkeley alum with 10+ yrs experience</li>
                        <li>Resume Rebuild portfolio available upon request</li>
                    </ul>
                    <button>Get Started</button>
                </div>
                <div>
                    <h1>Interview Prep</h1>
                    <p>Two sessions to sharpen your story, confidence, and clarity — fast.</p>
                    <p>$500 one time</p>
                    <hr />
                    <ul>
                        <li>2× 45-min live coaching with our co-founder</li>
                        <li>Real-time, practical feedback</li>
                        <li>Build clarity, empathy & executive presence</li>
                        <li>For senior and leadership roles — technical & non-technical</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Plans;