import {
    Container,
    Badge,
    Link,
    ListItem,
    List
} from "@chakra-ui/react"
import { ProjectImage, Title, Meta } from "../../components/project"
import Paragraph from "../../components/paragraph"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="pho36">
            <Container>
                <Title>
                    Pho36 <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A commercial website for a vietnamese restaurant
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://intense-cliffs-78950.herokuapp.com/">
                            Yelp-Camp <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>HTML, CSS, JS, Bootstrap, Node.js, Express.js, MongoDB,...  </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Browser</Meta>
                        <span>Chrome, Firefox, Microsoft Edge, Safari,...</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Time Range</Meta>
                        <span>Sep 2021 - Jan 2022</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/pho36.png" alt="pho36" />
            </Container>
        </Layout>
    )
}

export default Project