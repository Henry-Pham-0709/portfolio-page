import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from "@chakra-ui/react"
import Section from "../components/section"
import { ProjectGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import thumbYelpCamp from "../public/images/yelpcamp.png"
import thumbPho36 from "../public/images/pho36.png"
import thumbComingSoon from "../public/images/coming_soon.jpg"


const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="yelp-camp" title="YelpCamp" thumbnail={thumbYelpCamp}>
                            A Yelp like website for campgrounds with user's authentication and authorization implemented
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="pho36" title="Pho36" thumbnail={thumbPho36}>
                            Pho36 - a commercial website for Pho36 restaurant
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="coming_soon" title="Coming Soon" thumbnail={thumbComingSoon}>

                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="coming_soon" title="Coming Soon" thumbnail={thumbComingSoon}>

                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="coming_soon" title="Coming Soon" thumbnail={thumbComingSoon}>

                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="coming_soon" title="Coming Soon" thumbnail={thumbComingSoon}>

                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects