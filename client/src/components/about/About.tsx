import { Box, Grid, Avatar, Heading, Text, Paragraph } from 'grommet';

export default function AboutPage() {
  return (
    <Box align="center">
      <Heading>About Us</Heading>
      <Grid columns={['1fr', '1fr', '1fr', '1fr']} gap="medium">
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">DB</Avatar>
      </Box>
      <Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">ZL</Avatar>
      </Box>
      <Box>
        <Text margin={{right:"20px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">AF</Avatar>
      </Box>
      <Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">AD</Avatar>
      </Box>
      <Box>
        <Text margin={{right:"20px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">MC</Avatar>
      </Box>
      <Box>
        <Text>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      <Box margin={{left:"20px"}}>
        <Avatar size="2xl" background="dark-2">ED</Avatar>
      </Box>
      <Box>
        <Text margin={{right:"20px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut libero eget felis maximus aliquet ac vel augue. Integer vel magna in diam blandit tristique. Nunc id lorem blandit, vulputate lectus vel, mollis odio.
        </Text>
      </Box>
      </Grid>
      <Paragraph>
        Welcome to Money Mate, a personal financial application created as part of CSU's CIS 320 Project Management course. We built this app to help you manage your personal finances and take control of your money.
      </Paragraph>
      <Paragraph>
        With our budgeting tools, you can create a budget that reflects your income, expenses, and financial goals. Our web-application makes it easy to track your expenses by category, so you can see exactly where your money is going each month. And if you're looking to save money or pay down debt, we'll help you identify areas where you can cut back on spending
      </Paragraph>
      <Paragraph>
       But our app isn't just about tracking expenses – it's also about setting and achieving financial goals. Whether you want to save up for a down payment on a house, pay off your credit card debt, or take a dream vacation, we'll help you create a plan to get there.
      </Paragraph>
      <Paragraph>
        Our web-application is designed to be easy to use, no matter your level of financial knowledge or experience. And best of all, it's completely free! We believe that everyone should have access to tools that help them manage their personal finances.
      </Paragraph>
      <Paragraph>
        So why wait? Start using Money Mate today and take control of your money!
      </Paragraph>
    </Box>
  );
};