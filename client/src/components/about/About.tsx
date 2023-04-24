import {Box, Grid, Avatar, Heading, Text, Paragraph} from 'grommet';
import Ernest from "./Ernest-Duckworth.jpeg"
import Zach from "./zlowe.jpeg";
import Andrew from "./andrewPic.jpeg";
import Dan from "./dan.jpeg"

export default function AboutPage() {
    return (
        <Box align="center">
            <Heading>About Us</Heading>
            <Grid columns={['1fr', '1fr', '1fr', '1fr']} gap="medium">
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" background="dark-2" src={Dan}/>
                </Box>
                <Box>
                    <Text style={{fontWeight: "bold"}} size="large" margin={{right: "20px"}}>
                        Dan Butcher
                    </Text>
                    <Text>
                        Senior Computer Science Major concentrating in Software Engineering. Obsessed with designing and
                        building solutions to problems.
                    </Text>
                </Box>
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" src={Zach}/>
                </Box>
                <Box>
                    <Text style={{fontWeight: "bold"}} size="large" margin={{right: "20px"}}>
                        Zachary Lowe
                    </Text>
                    <Text margin={{right: "20px"}}>
                        Undergraduate student at CSU studying Computer Science. Areas of Interest: Enterprise IT,
                        Software Development, and Systems Administration
                    </Text>
                </Box>
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" background="dark-2">AF</Avatar>
                </Box>
                <Box>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus
                        aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit,
                        vulputate lectus vel, mollis odio.
                    </Text>
                </Box>
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" src={Andrew}/>
                </Box>
                <Box>
                    <Text style={{fontWeight: "bold"}} size="large" margin={{right: "20px"}}>
                        Andrew Derr
                    </Text>
                    <Text margin={{right: "20px"}}>
                        Undergraduate senior studying Computer Science (Software Engineering) with a minor in Data
                        Science.
                    </Text>
                </Box>
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" background="dark-2">MC</Avatar>
                </Box>
                <Box>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus
                        aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit,
                        vulputate lectus vel, mollis odio.
                    </Text>
                </Box>
                <Box margin={{left: "20px"}} align={"center"}>
                    <Avatar size="2xl" src={Ernest}/>
                </Box>
                <Box>
                    <Text style={{fontWeight: "bold"}} size="large" margin={{right: "20px"}}>
                        Ernest Duckworth
                    </Text>
                    <Text margin={{right: "20px"}}>
                        Undergraduate at Colorado State University studying Computer Science (Software Engineering)
                    </Text>
                </Box>
            </Grid>
            <Paragraph>
                Welcome to Money Mate, a personal financial application created as part of CSU's CIS 320 Project
                Management course. We built this app to help you manage your personal finances and take control of your
                money.
            </Paragraph>
            <Paragraph>
                With our budgeting tools, you can create a budget that reflects your income, expenses, and financial
                goals. Our web-application makes it easy to track your expenses by category, so you can see exactly
                where your money is going each month. And if you're looking to save money or pay down debt, we'll help
                you identify areas where you can cut back on spending
            </Paragraph>
            <Paragraph>
                But our app isn't just about tracking expenses – it's also about setting and achieving financial goals.
                Whether you want to save up for a down payment on a house, pay off your credit card debt, or take a
                dream vacation, we'll help you create a plan to get there.
            </Paragraph>
            <Paragraph>
                Our web-application is designed to be easy to use, no matter your level of financial knowledge or
                experience. And best of all, it's completely free! We believe that everyone should have access to tools
                that help them manage their personal finances.
            </Paragraph>
            <Paragraph>
                So why wait? Start using Money Mate today and take control of your money!
            </Paragraph>
        </Box>
    );
};