import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps {
	showProfileData: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Gabriel Dürr</Text>
					<Text color="gray.300" fontSize="small">
						gabriel.durr@outlook.com
					</Text>
				</Box>
			)}
			<Avatar
				size="md"
				name="Gleydson Rodrigues"
				src="https://github.com/gabriel-durr.png"
			/>
		</Flex>
	);
}
