import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Node = styled.div`
	border: 1px solid #000;
	border-radius: 5px;
	background-color: rgb(255, 255, 255, 0.9);
`;

export const Header = styled.div`
	width: 100%;
	height: 25px;
	background-color: #3366cc;
	display: flex;
	justify-content: space-between;
	padding: 2px 10px 2px 10px;
`;

export const HeaderLeft = styled.div``;

export const HeaderCenter = styled.div``;

export const HeaderTitle = styled.p`
	font-size: 16px;
	color: white;
	font-weight: bold;
`;

export const HeaderRight = styled.div`
	color: white;
`;

export const Body = styled.div`
	border: 1px solid #000;
	margin: 15px;
	overflow-y: auto;
`;

export const PortIn = styled.div`
	position: absolute;
	top: 50%;
	left: -8px;
`;

export const PortOut = styled.div`
	position: absolute;
	top: 50%;
	right: -8px;
`;

export const BodyButton = styled.div`
	margin: 10px 15px 0 15px;
`;

export const CustomButton = styled(Button)``;
