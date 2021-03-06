import {
    Container,
    Button,
    Box,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { TechSection, TechList, TechTopic } from "../components/tech"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoLinkedin
} from "react-icons/io5"

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Greetings, My name is Hoang!
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Huy Hoang Pham
                        </Heading>
                        <p>Software Developer ( Student / Freelancer )</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/ava.jpg"
                            alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Projects
                    </Heading>
                    <Paragraph>I&apos;m a full-time student studying Software Development at SAIT. I have a great passion for technology
                        and a good amount of knowledge of Website Development. Outside of school, I usually take my time to learn about
                        new technology or freelancing with my website develop skills. One of my website is called {' '}
                        <NextLink href="/projects/yelp-camp">
                            <Link>YelpCamp</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2003
                        </BioYear>
                        Born in Ho Chi Minh City, Vietnam.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2019
                        </BioYear>
                        Completed Machine Learning for A.I Program.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed the Highschool&apos;s Program in Le Hong Phong Highschool for the Gifted
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed the Website Development Bootcamp
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - present</BioYear>
                        Student at Southern Alberta Institute of Technology with an average GPA of 4.0. Honored student of Phi Theta Kappa
                        Honor Society
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Technical Skills
                    </Heading>
                    <TechSection>
                        <TechTopic>Programming Language</TechTopic>
                        <TechList>Python</TechList>
                        <TechList>JavaScript</TechList>
                        <TechList>Java</TechList>
                        <TechList>C++</TechList>
                    </TechSection>
                    <TechSection>
                        <TechTopic>Frameworks, Libraries &amp; Package</TechTopic>
                        <TechList>Bootstrap</TechList>
                        <TechList>Node.js</TechList>
                        <TechList>Express.js</TechList>
                        <TechList>EJS</TechList>
                        <TechList>React.js</TechList>
                        <TechList>Chakra UI</TechList>
                        <TechList>Framer Motion</TechList>
                        <TechList>Next.js</TechList>
                        <TechList>Three.js</TechList>
                        <TechList>Passport</TechList>
                        <TechList>Emotion</TechList>
                        <TechList>MongoDB/Mongoose.js</TechList>
                        <TechList>Numpy</TechList>
                        <TechList>Tkinter</TechList>
                        <TechList>Keras</TechList>
                        <TechList>TensorFlow</TechList>
                        <TechList>Pandas</TechList>
                        <TechList>Matplotlib</TechList>
                    </TechSection>
                    <TechSection>
                        <TechTopic>Tools</TechTopic>
                        <TechList>Git/Github</TechList>
                        <TechList>Linux Terminal</TechList>
                        <TechList>Vercel/Heroku</TechList>
                        <TechList>Postman</TechList>
                        <TechList>Cloudinary</TechList>
                        <TechList>MapBox</TechList>
                        <TechList>Atlas (MongoDB)</TechList>
                        <TechList>Web APIs</TechList>
                        <TechList>RESTful APIs</TechList>
                        <TechList>Blender</TechList>
                        <TechList>Lucidchart</TechList>
                        <TechList>VS Code</TechList>
                        <TechList>Pycharm</TechList>
                        <TechList>Google Colab</TechList>
                        <TechList>Jupyter</TechList>
                    </TechSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Social Activity
                    </Heading>
                    <BioSection>
                        <BioYear>2019 - 2020</BioYear>
                        Member of Community Organization - Game Host Department
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Member of the Red Phoenix Campaign
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Third place in Capture the Flag (CTF) Hacking Competition
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        I ???
                    </Heading>
                    <Paragraph>
                        Game Development, Website Development, Artificial Intelligent, Machine Learning, Psychology, Business
                    </Paragraph>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title" mb={6}>
                        Social Media
                    </Heading>
                </Section>
                <List>
                    <ListItem>
                        <Link href="https://github.com/Henry-Pham-0709" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                Henry Pham
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/hoang-pham-5073a420a/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                Hoang Pham
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/hoang.phamhuy.906/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                Huy Hoang Pham
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/henry_pham0709/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                Henry Pham
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Page 