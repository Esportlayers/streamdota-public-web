import React, { ReactElement } from "react";
import FeatureList from "../../FeatureList";

const features = [
    {
        icon: <svg width="29" height="25" viewBox="0 0 29 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.223 1.78571C21.1148 1.78571 26.723 6.1942 26.723 11.6071C26.723 17.0201 21.1148 21.4286 14.223 21.4286C12.6438 21.4286 11.0813 21.1886 9.58019 20.7143L8.73197 20.4464L8.00652 20.9598C6.72304 21.8694 4.74202 22.9297 2.28108 23.1696C2.95072 22.327 3.94402 20.9152 4.55786 19.2857L4.95407 18.2422L4.18956 17.4275C2.57684 15.7199 1.72304 13.7054 1.72304 11.6071C1.72304 6.1942 7.3313 1.78571 14.223 1.78571ZM14.223 0C6.33242 0 -0.0626721 5.19531 -0.0626721 11.6071C-0.0626721 14.2634 1.04782 16.6964 2.88934 18.6551C2.05786 20.8538 0.327953 22.7176 0.300051 22.74C-0.0682525 23.1306 -0.168699 23.6998 0.0433546 24.1908C0.255408 24.6819 0.735319 25 1.27103 25C4.70295 25 7.40943 23.5658 9.03331 22.4163C10.6516 22.9241 12.3927 23.2143 14.223 23.2143C22.1137 23.2143 28.5088 18.019 28.5088 11.6071C28.5088 5.19531 22.1137 0 14.223 0Z" />
        </svg>,
        text: 'Display questions from your chat in your stream.',
    },
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.7266 37.625L29.6484 27.5469C29.4688 27.3672 29.2344 27.2734 28.9844 27.2734H28.1797C30.8594 24.375 32.5 20.5078 32.5 16.25C32.5 7.27344 25.2266 0 16.25 0C7.27344 0 0 7.27344 0 16.25C0 25.2266 7.27344 32.5 16.25 32.5C20.5078 32.5 24.375 30.8594 27.2734 28.1875V28.9844C27.2734 29.2344 27.375 29.4688 27.5469 29.6484L37.625 39.7266C37.9922 40.0937 38.5859 40.0937 38.9531 39.7266L39.7266 38.9531C40.0937 38.5859 40.0937 37.9922 39.7266 37.625ZM16.25 30C8.64844 30 2.5 23.8516 2.5 16.25C2.5 8.64844 8.64844 2.5 16.25 2.5C23.8516 2.5 30 8.64844 30 16.25C30 23.8516 23.8516 30 16.25 30Z" />
        </svg>,
        text: 'Define a keyword in your dashboard to listen on.',
    },
    {
        icon: <svg width="22" height="24" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9096 8.93912L24.9894 8.49269C25.0626 8.08225 24.7471 7.70536 24.3302 7.70536H18.8279L19.9628 1.34983C20.0361 0.939397 19.7205 0.5625 19.3036 0.5625H18.85C18.6929 0.562503 18.5407 0.617801 18.4202 0.718711C18.2996 0.819622 18.2185 0.959713 18.1908 1.11445L17.0139 7.70536H9.89932L11.0343 1.34983C11.1075 0.939397 10.792 0.5625 10.375 0.5625H9.92148C9.76429 0.562503 9.61211 0.617801 9.49159 0.718711C9.37108 0.819622 9.2899 0.959713 9.26227 1.11445L8.08537 7.70536H2.34392C2.18673 7.70536 2.03456 7.76066 1.91404 7.86157C1.79352 7.96248 1.71234 8.10257 1.68471 8.25731L1.60497 8.70374C1.5317 9.11417 1.84727 9.49107 2.26423 9.49107H7.76646L6.49096 16.6339H0.749559C0.592372 16.6339 0.440195 16.6892 0.319676 16.7901C0.199157 16.8911 0.117978 17.0311 0.090352 17.1859L0.0106088 17.6323C-0.0626612 18.0427 0.252908 18.4196 0.669816 18.4196H6.1721L5.03716 24.7752C4.96389 25.1856 5.27946 25.5625 5.69643 25.5625H6.14994C6.30713 25.5625 6.45931 25.5072 6.57982 25.4063C6.70034 25.3054 6.78152 25.1653 6.80915 25.0105L7.98604 18.4196H15.1007L13.9657 24.7752C13.8925 25.1856 14.208 25.5625 14.625 25.5625H15.0785C15.2357 25.5625 15.3879 25.5072 15.5084 25.4063C15.6289 25.3054 15.7101 25.1653 15.7377 25.0105L16.9146 18.4196H22.656C22.8132 18.4196 22.9654 18.3643 23.0859 18.2634C23.2064 18.1625 23.2876 18.0224 23.3152 17.8677L23.395 17.4213C23.4682 17.0108 23.1527 16.6339 22.7357 16.6339H17.2335L18.509 9.49107H24.2504C24.4076 9.49108 24.5598 9.43579 24.6803 9.33488C24.8008 9.23397 24.882 9.09387 24.9096 8.93912ZM15.4195 16.6339H8.30496L9.58046 9.49107H16.6951L15.4195 16.6339Z" />
        </svg>
        ,
        text: 'Listen also on tweets with a specific hashtag.',
    },
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75001 20.625C7.71094 20.625 6.87501 21.4609 6.87501 22.5C6.87501 23.5391 7.71094 24.375 8.75001 24.375C9.78907 24.375 10.625 23.5391 10.625 22.5C10.625 21.4609 9.78907 20.625 8.75001 20.625ZM11.25 11.875C10.2109 11.875 9.37501 12.7109 9.37501 13.75C9.37501 14.7891 10.2109 15.625 11.25 15.625C12.2891 15.625 13.125 14.7891 13.125 13.75C13.125 12.7109 12.2891 11.875 11.25 11.875ZM20 0C18.6797 0 17.3281 0.125 15.9609 0.390625C8.19532 1.90625 1.93751 8.14844 0.406255 15.8906C-2.29687 29.5703 9.09376 40 18.7109 40C19.3594 40 20 39.9531 20.6328 39.8516C23.8516 39.3516 25.4297 35.5859 23.9531 32.6875C22.1484 29.1406 24.7266 25 28.7109 25H34.9375C37.7344 25 40 22.6875 40.0078 19.8984C39.9688 8.89844 31.0234 0 20 0ZM34.9297 22.5H28.7031C25.9453 22.5 23.4375 23.8984 22.0078 26.2344C20.5859 28.5547 20.4766 31.3906 21.7188 33.8281C22.1016 34.5781 22.0938 35.5156 21.7109 36.2734C21.5234 36.6328 21.0938 37.2578 20.25 37.3906C19.7578 37.4688 19.2422 37.5078 18.7109 37.5078C14.4453 37.5078 9.79688 35.0625 6.56251 31.1328C3.12501 26.9453 1.80469 21.7109 2.85938 16.3906C4.19532 9.625 9.65626 4.1875 16.4453 2.85937C17.6328 2.625 18.8281 2.50781 20 2.50781C29.6172 2.50781 37.4688 10.3125 37.5 19.8984C37.5 21.3281 36.3438 22.5 34.9297 22.5V22.5ZM28.75 10.625C27.7109 10.625 26.875 11.4609 26.875 12.5C26.875 13.5391 27.7109 14.375 28.75 14.375C29.7891 14.375 30.625 13.5391 30.625 12.5C30.625 11.4609 29.7891 10.625 28.75 10.625ZM18.75 6.875C17.7109 6.875 16.875 7.71094 16.875 8.75C16.875 9.78906 17.7109 10.625 18.75 10.625C19.7891 10.625 20.625 9.78906 20.625 8.75C20.625 7.71094 19.7891 6.875 18.75 6.875Z" />
        </svg>,
        text: 'Match the overlay of your stream scene with ease.',
    },
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5625 1.87502H2.34375C2.86148 1.87502 3.28125 2.29478 3.28125 2.81252V10.2051C6.65594 4.45682 12.9093 0.602753 20.062 0.625097C30.7172 0.658456 39.3916 9.37572 39.375 20.031C39.3583 30.7173 30.6902 39.375 20 39.375C15.0058 39.375 10.453 37.4854 7.01734 34.3822C6.61789 34.0214 6.59906 33.4009 6.97969 33.0203L7.53195 32.468C7.88375 32.1162 8.44984 32.0997 8.81961 32.4325C11.7798 35.0967 15.698 36.7188 20 36.7188C29.1988 36.7188 36.7188 29.271 36.7188 20C36.7188 10.8013 29.271 3.28127 20 3.28127C13.5264 3.28127 7.91117 6.95916 5.13367 12.3438H12.8125C13.3302 12.3438 13.75 12.7635 13.75 13.2813V14.0625C13.75 14.5803 13.3302 15 12.8125 15H1.5625C1.04477 15 0.625 14.5803 0.625 14.0625V2.81252C0.625 2.29478 1.04477 1.87502 1.5625 1.87502ZM26.6912 26.5028L27.0588 25.9973C27.3634 25.5785 27.2708 24.9922 26.852 24.6877L21.25 20.6135V9.06252C21.25 8.54478 20.8302 8.12502 20.3125 8.12502H19.6875C19.1698 8.12502 18.75 8.54478 18.75 9.06252V21.8865L25.3816 26.7095C25.8003 27.0141 26.3866 26.9215 26.6912 26.5028V26.5028Z" />
        </svg>,
        text: 'Works excellent for streams with delay.',
    },
]

export default function ChatAnalysesFeatures(): ReactElement {
    return <FeatureList features={features} iconColor={'#E8772C'} />;
}