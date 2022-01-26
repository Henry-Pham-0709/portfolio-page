import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, ProjectImage, Meta } from "../../components/project"
import Paragraph from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Project = () => {
    return (
        <Layout title="YelpCamp">
            <Container>
                <Title>
                    YelpCamp <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A Yelp website for campgrounds with map and detail page to display campgrounds all around the world.
                    Implement authentication and authorization so user can create an account and post their campgrounds for commercial.
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

                <ProjectImage src="/images/yelpcamp.png" alt="YelpCamp" />
            </Container>
        </Layout>
    )
}

export default Project