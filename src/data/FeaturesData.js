import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Link Shortener',
		description: 'With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'QR Code Generator',
		description: 'Easily create a QR-Code with this free Tool! Just enter a Text or a Link and click on the above Button to get a QR-Code! You can download the QR-Code and if you want, you can print it! All QR-Codes are generated client-side, which mean that your entered text doesnt leave your device.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Password protect a Link',
		description: 'With this free Link Generator you can easily password-protect any Link you want. Just enter the original Link and choose a password and you re done! The generated Link can be shared anywhere but can only be accessed by entering the correct password.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Custom Link Generator',
		description:
			'Enter a Link and a custom text to easily create a custom shrtcode short-link! ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];