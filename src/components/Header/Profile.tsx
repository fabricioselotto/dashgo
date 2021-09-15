import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Fabrício Selotto</Text>
                    <Text color='gray.300' fontSize='small'>
                        fabricioselottohard01@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name='Fabrício Selotto' src='https://github.com/fabricioselotto.png' />
        </Flex>
    );
}