import Head from "next/head"
import Navbar from "../navbar"
import NoSsr from "../no-ssr"
import { Box, Container } from "@chakra-ui/react"
import Henry from "../henry"

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hoang's Portfolio - Home</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Henry />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main