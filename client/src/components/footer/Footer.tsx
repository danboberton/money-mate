import { Footer, Text, Box} from "grommet";

export default function FooterComponent() {
    return(
        <Box>
            <Footer background="light-3" pad="small">
                <Text size="small">
                    &copy; 2023 Money Mate
                </Text>
            </Footer>
        </Box>
    );
}