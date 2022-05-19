import React from 'react'
import './AboutContent.css'
import Jesus from '../images/Jesus.jpg';
import bg from '../images/bg.jpg'

const AboutJesusContent = () => {
  return (
    <section className='about Jesus' id="Jesus">
        <div className='Image'>
          <img src={Jesus} alt="Jesus" />
        </div>
        <div className="title"><h2>Who is Jesus?</h2></div>
        <div className="about-content">
          <p>
            The Bible may not answer every question about God and will often lead us to ask more, but one of the areas in which the Bible is quite definite, is the answer to the question: who is Jesus? C.S Lewis, a well-known Christian author wrote of Jesus, “Either this man was, and is, the Son of God, or else a madman or something worse. You can shut him up for a fool, you can spit at him and kill him as a demon or you can fall at his feet and call him Lord and God, but let us not come with any patronizing nonsense about his being a great human teacher. He has not left that open to us. He did not intend to.”
          </p>
        </div>
        <div className='quote'>
          <h1>This is how much God loved the world: He gave his Son so that no one need be destroyed; by believing in Him, anyone can have a whole and lasting life.</h1>
        </div>
        <div className="jesus-content about-content">
          <h2>Jesus Cares!</h2>
          <h3>So does Jesus care about you? Yes He does! How do we know this?</h3>
          <h3>Often we disqualify ourselves from God’s love because of our history, our failures and shortcomings. Sin has separated us from God and we can never make up for our sin by self-improvement or good works. So how can we accept what we have not earned? The Bible says that nothing in all of creation can separate us from the Love of God that is in Christ Jesus our Lord. And to accept God’s love is to trust His patient, forgiving and gracious stance towards us. Only He has the power to free us from guilt, shame and condemnation to give us a life of wholeness. All we have to do is turn to Him.</h3>
        </div>
    </section>
  )
}

export default AboutJesusContent