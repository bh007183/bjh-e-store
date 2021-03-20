import "./style.css"
import React from 'react'
import NavBar from "../../components/navbar"
import Grid from "@material-ui/core/Grid";

export default function About() {
    return (
        <>
            <NavBar/>
            <Grid container  xs={12}>
                <Grid xs={1}></Grid>
                <Grid className={"about"} xs={12} sm={8} >
                    <h2>This is just giberish because this is not a real store</h2>
                    <p>

You know, it's high tide. But we're not on the coast. I'm closed for maintenance! Closed for maintenance? I've fallen to the communists! Well, they do have some strong arguments. I'm going to murder you... You bloody woman! Unbelievable! Some idiot disabled his firewall, meaning all the computers on Seven are teeming with viruses, plus I've just had to walk all the way down the motherfudging stairs, because the lifts are broken AGAIN! Carrie, Moss! First scene in Carrie! Oh. Okay You can come down here any time and I'll be waiting for you! [slams down phone] That told her! Hello, IT. Have you tried forcing an unexpected reboot?

Carrie, Moss! First scene in Carrie! Oh. Okay Today I have a business empire the like of which the world has never seen the like of which. I hope it doesn't sound arrogant when I say that I am the greatest man in the world! No, that's the music you hear when... I'm sorry are you from the past? Today I have a business empire the like of which the world has never seen the like of which. I hope it doesn't sound arrogant when I say that I am the greatest man in the world! 0115... no... 0118... no... 0118 999 ... 3. Hello? Is this the emergency services? Then which country am I speaking to? Hello? Hello?</p>
                </Grid>
                <Grid xs={12} sm={3}>
                    <Grid className={"about1 contact"} item>
                        <h2>Contact us! </h2>
                        <h6 style={{textAlign:"center"}}>If you want. You dont have to. </h6>
                        
                            <p>907-231-2406</p>
                            <a href={"mailto:bjhopsdeveloper@gmail.com"}><p>bjhopsdeveloper@gmail.com</p></a>
                           
                        

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
