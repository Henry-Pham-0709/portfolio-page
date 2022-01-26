import { Box, Badge } from "@chakra-ui/react"
import styled from "@emotion/styled"

export const TechSection = styled(Box)`
`

export const TechTopic = styled.span`
    font-weight:bold;
    margin-right: 1em;
`
export const TechList = ({ children }) => (
    <Badge colorScheme="facebook" mr={2}>
        {children}
    </Badge>
)