import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const ShortlySection = styled.section`
	position: relative;
	width: 100%;
	max-width: 1440px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 60px;
	border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
	@media only screen and (max-width: 1440px) {
	max-width: calc(100% - 68px);
	padding: 0 30px;
	}
	@media only screen and (max-width: 768px) {
	max-width: calc(100% - 38px);
	padding: 0 18px;
	}
	@media only screen and (max-width: 375px) {
	max-width: 100%;
	padding: 0 18px;
	}
`;
 

export const ShortlyVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;
 

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;


export const ShortlyText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fffffff;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const ShortlyButton = styled(Button)`
	color: black;
	&:before {
		background: #fff;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`;