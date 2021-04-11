import { ReactElement } from "react";
import Card from "../Card";
import Container from "../Container";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";

export default function AboutDetails(): ReactElement {
    return <Section id={'about'}>
        <SectionHeader title={'About'} />
        <SectionDescription>Some interesting facts about streamdota worth mentioning</SectionDescription>

        <Container>
            <div className={'cardGrid'}>
                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8663 14.3297L12.3506 13.275C11.9475 13.1539 11.6655 12.7453 11.6655 12.2805C11.6655 11.7125 12.0795 11.25 12.5874 11.25H14.7835C15.1397 11.25 15.4835 11.3508 15.785 11.5406C16.0381 11.6992 16.36 11.6898 16.5764 11.4836L17.4944 10.6078C17.7702 10.3445 17.7545 9.88828 17.4499 9.65937C16.7389 9.12578 15.8811 8.81797 14.9991 8.77266V7.5C14.9991 7.15469 14.7194 6.875 14.3741 6.875H13.1241C12.7788 6.875 12.4991 7.15469 12.4991 7.5V8.75938C10.6538 8.80859 9.16548 10.3648 9.16548 12.2805C9.16548 13.8406 10.1795 15.2344 11.6327 15.6703L15.1483 16.725C15.5514 16.8461 15.8335 17.2547 15.8335 17.7195C15.8335 18.2875 15.4194 18.75 14.9116 18.75H12.7155C12.3592 18.75 12.0155 18.6492 11.7139 18.4594C11.4608 18.3008 11.1389 18.3102 10.9225 18.5164L10.0045 19.3922C9.72877 19.6555 9.74439 20.1117 10.0491 20.3406C10.76 20.8742 11.6178 21.182 12.4999 21.2273V22.5C12.4999 22.8453 12.7795 23.125 13.1249 23.125H14.3749C14.7202 23.125 14.9999 22.8453 14.9999 22.5V21.2406C16.8452 21.1914 18.3335 19.6359 18.3335 17.7195C18.3335 16.1594 17.3194 14.7656 15.8663 14.3297V14.3297ZM13.7499 0C5.70689 0 -0.00951607 6.52656 -0.000141074 13.7688C0.00454643 17.2281 1.28892 20.3836 3.40298 22.7953C5.40689 25.0805 7.33189 28.8031 7.49986 30L7.50455 35.8734C7.50455 36.1195 7.57798 36.3594 7.71392 36.5641L9.62877 39.4422C9.8608 39.7906 10.2514 40 10.6694 40H16.8295C17.2483 40 17.6389 39.7906 17.8702 39.4422L19.785 36.5641C19.921 36.3594 19.9936 36.1187 19.9944 35.8734L19.9999 30C20.1764 28.7719 22.1085 25.0633 24.0967 22.7953C26.2147 20.3789 27.4999 17.2164 27.4999 13.75C27.4999 6.15625 21.3436 0 13.7499 0ZM17.4952 35.493L16.16 37.5H11.3389L10.0038 35.493L10.003 35H17.4952V35.493ZM17.4983 32.5H10.0006L9.99517 30H17.5014L17.4983 32.5ZM22.217 21.1469C21.1241 22.3937 19.3788 24.9047 18.2655 27.4992H9.23502C8.12095 24.9039 6.37642 22.3937 5.28345 21.1469C3.47642 19.0859 2.51002 16.4727 2.50377 13.75C2.4897 7.73516 7.22095 2.5 13.7499 2.5C19.953 2.5 24.9999 7.54687 24.9999 13.75C24.9999 16.4727 24.0116 19.1 22.217 21.1469Z" fill="#E8772C" />
                            </svg>
                            <h3>Costs</h3>
                            <div className={'description'}>
                                Our whole system is free to use.< br /> Currently, I have no intention of earning any money with this platform.
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.4453 6.53907L20.4453 0.289067C19.9884 0.0995198 19.4986 0.00195313 19.0039 0.00195312C18.5092 0.00195313 18.0194 0.0995198 17.5625 0.289067L2.5625 6.53907C1.16406 7.11719 0.25 8.48438 0.25 10C0.25 25.5078 9.19531 36.2266 17.5547 39.7109C18.4766 40.0938 19.5156 40.0938 20.4375 39.7109C27.1328 36.9219 37.75 27.2891 37.75 10C37.75 8.48438 36.8359 7.11719 35.4453 6.53907ZM19.4844 37.4063C19.1719 37.5313 18.8281 37.5313 18.5234 37.4063C10.875 34.375 2.75 23.75 2.75 10C2.75 9.49219 3.05469 9.03907 3.51562 8.84375L18.5156 2.59376C18.8203 2.46876 19.1719 2.46876 19.4766 2.59376L34.4766 8.84375C34.9453 9.03907 35.25 9.49219 35.2422 10C35.25 23.75 27.125 34.375 19.4844 37.4063V37.4063ZM30.125 12.0156C29.7578 11.6484 29.1641 11.6484 28.7969 12.0078L16.0312 24.6719L10.6406 19.2422C10.2734 18.875 9.67969 18.875 9.3125 19.2344L8.64844 19.8984C8.28125 20.2656 8.28125 20.8594 8.64063 21.2266L15.3516 27.9922C15.7188 28.3594 16.3125 28.3594 16.6797 28L30.7812 14.0156C31.1484 13.6484 31.1484 13.0547 30.7891 12.6875L30.125 12.0156Z" fill="#119DA4" />
                            </svg>
                            <h3>Security</h3>
                            <div className={'description'}>
                                Security made simple. We do not store any data aside from public twitch profile data for user management. Every other data is not stored and only available until it has been processed.
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.375 23C9.375 24.0359 8.53594 24.875 7.5 24.875C6.46406 24.875 5.625 24.0359 5.625 23C5.625 21.9641 6.46406 21.125 7.5 21.125C8.53594 21.125 9.375 21.9641 9.375 23ZM22.5 9.875C23.5359 9.875 24.375 9.03594 24.375 8C24.375 6.96406 23.5359 6.125 22.5 6.125C21.4641 6.125 20.625 6.96406 20.625 8C20.625 9.03594 21.4641 9.875 22.5 9.875ZM33.125 14.25C34.1609 14.25 35 13.4109 35 12.375C35 11.3391 34.1609 10.5 33.125 10.5C32.0891 10.5 31.25 11.3391 31.25 12.375C31.25 13.4109 32.0891 14.25 33.125 14.25ZM38.7328 22.7953C38.8477 23.4766 38.3859 24.1195 37.7047 24.2336L27.4547 25.9422C27.2289 28.4922 25.1102 30.5 22.5 30.5C19.7383 30.5 17.5 28.2617 17.5 25.5C17.5 22.7383 19.7383 20.5 22.5 20.5C24.5383 20.5 26.2844 21.7234 27.0633 23.4727L37.2953 21.7672C37.9617 21.6508 38.618 22.1141 38.7328 22.7953V22.7953ZM25 25.5C25 24.1195 23.8805 23 22.5 23C21.1195 23 20 24.1195 20 25.5C20 26.8805 21.1195 28 22.5 28C23.8805 28 25 26.8805 25 25.5ZM11.875 10.5C10.8391 10.5 10 11.3391 10 12.375C10 13.4109 10.8391 14.25 11.875 14.25C12.9109 14.25 13.75 13.4109 13.75 12.375C13.75 11.3391 12.9109 10.5 11.875 10.5ZM45 23C45 27.125 43.8867 30.9891 41.9484 34.3125C41.5102 35.0641 40.675 35.5 39.8047 35.5H5.19531C4.325 35.5 3.48984 35.0641 3.05156 34.3125C1.11328 30.9891 0 27.125 0 23C0 10.5734 10.0734 0.5 22.5 0.5C34.9266 0.5 45 10.5734 45 23ZM42.5 23C42.5 11.9719 33.5281 3 22.5 3C11.4719 3 2.5 11.9719 2.5 23C2.5 26.5359 3.4375 30.0117 5.21094 33.0531L39.8047 33C41.5625 30.0117 42.5 26.5359 42.5 23Z" fill="#24D46A" />
                            </svg>
                            <h3>Fast</h3>
                            <div className={'description'}>
                                We hate slow websites, so we always strive to enhance the speed and adjust any bottlenecks or slow code.
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8515 39.9844L15.8984 39.4297C15.6484 39.3594 15.5078 39.1015 15.5781 38.8515L26.5703 0.343762C26.6406 0.0937627 26.8984 -0.0468622 27.1484 0.0234502L29.1015 0.578137C29.3515 0.64845 29.4921 0.906262 29.4218 1.15626L18.4297 39.6562C18.3593 39.9062 18.0937 40.0547 17.8515 39.9844ZM11.9453 30.1953L13.3906 28.5625C13.539 28.3984 13.5156 28.1484 13.3515 28.0078L3.89843 20L13.3515 11.9922C13.5156 11.8516 13.539 11.6016 13.3906 11.4375L11.9453 9.80469C11.8047 9.64063 11.5547 9.62501 11.3906 9.77344L0.132812 19.7109C-0.0468749 19.8672 -0.0468749 20.1406 0.132812 20.2969L11.3906 30.2344C11.5547 30.375 11.8047 30.3594 11.9453 30.1953ZM33.6093 30.2266L44.8671 20.2891C45.0468 20.1328 45.0468 19.8594 44.8671 19.7031L33.6093 9.77344C33.4453 9.63282 33.2031 9.64844 33.0546 9.80469L31.6093 11.4375C31.4609 11.6016 31.4843 11.8516 31.6484 11.9922L41.1015 20L31.6484 28.0078C31.4843 28.1484 31.4609 28.3984 31.6093 28.5625L33.0546 30.1953C33.1953 30.3594 33.4453 30.375 33.6093 30.2266V30.2266Z" fill="#CA054D" />
                            </svg>
                            <h3>Sources</h3>
                            <div className={'description'}>
                                The whole project is open source. As we do not intend to earn any money, there is no reason to hide our sources. Maybe some other fabulous projects will be built on top! You can find everything on <a href={'https://github.com/Esportlayers'} target={'_blank'} rel={'noopener'}>Github</a>.
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 5.00004C22.6802 5.00294 20.4563 5.92574 18.816 7.56605C17.1757 9.20637 16.2529 11.4303 16.25 13.75C16.25 14.0816 16.3817 14.3995 16.6161 14.6339C16.8505 14.8683 17.1685 15 17.5 15C17.8315 15 18.1495 14.8683 18.3839 14.6339C18.6183 14.3995 18.75 14.0816 18.75 13.75C18.7519 12.093 19.4109 10.5044 20.5826 9.33268C21.7543 8.16098 23.343 7.5019 25 7.50004C25.3315 7.50004 25.6495 7.36835 25.8839 7.13393C26.1183 6.8995 26.25 6.58156 26.25 6.25004C26.25 5.91852 26.1183 5.60058 25.8839 5.36616C25.6495 5.13174 25.3315 5.00004 25 5.00004V5.00004ZM25 4.18824e-05C16.9578 4.18824e-05 11.2406 6.52738 11.25 13.768C11.2497 17.0907 12.4595 20.2997 14.6531 22.7954C16.6578 25.0782 18.5812 28.8039 18.75 30L18.7547 35.8743C18.7549 36.1199 18.828 36.36 18.9648 36.5641L20.8789 39.4422C20.9929 39.6136 21.1475 39.7542 21.3289 39.8516C21.5103 39.9489 21.7129 39.9999 21.9187 40H28.0789C28.2852 40.0003 28.4883 39.9494 28.6701 39.8521C28.8519 39.7548 29.0069 39.614 29.1211 39.4422L31.0352 36.5625C31.1707 36.3579 31.2438 36.1182 31.2453 35.8727L31.25 30C31.4258 28.7719 33.3594 25.0633 35.3469 22.7954C37.0869 20.8083 38.2174 18.3619 38.6031 15.749C38.9888 13.1361 38.6133 10.4674 37.5216 8.06233C36.43 5.65727 34.6684 3.61776 32.4476 2.18791C30.2269 0.758067 27.6412 -0.00153042 25 4.18824e-05V4.18824e-05ZM28.7453 35.493L27.4094 37.5H22.5875L21.2547 35.493V35H28.7477L28.7453 35.493ZM28.75 32.5H21.25L21.2453 30H28.75V32.5ZM33.4695 21.1477C32.3758 22.3938 30.632 24.9047 29.5187 27.4985H20.4859C19.3703 24.9039 17.6266 22.3938 16.5328 21.1477C14.7394 19.1008 13.752 16.4714 13.7547 13.75C13.7406 7.73442 18.4719 2.50004 25 2.50004C31.2039 2.50004 36.25 7.54613 36.25 13.75C36.2499 16.4717 35.2609 19.1007 33.4672 21.1477H33.4695ZM7.5 13.75C7.5 13.4185 7.3683 13.1006 7.13388 12.8662C6.89946 12.6317 6.58152 12.5 6.25 12.5H1.25C0.918479 12.5 0.600537 12.6317 0.366117 12.8662C0.131696 13.1006 0 13.4185 0 13.75C0 14.0816 0.131696 14.3995 0.366117 14.6339C0.600537 14.8683 0.918479 15 1.25 15H6.25C6.58152 15 6.89946 14.8683 7.13388 14.6339C7.3683 14.3995 7.5 14.0816 7.5 13.75ZM41.25 5.00004C41.4441 4.9996 41.6355 4.95442 41.8094 4.86801L46.8094 2.36801C47.1059 2.21966 47.3313 1.95959 47.4361 1.64503C47.5408 1.33046 47.5163 0.987171 47.368 0.690667C47.2945 0.543853 47.1929 0.412946 47.0688 0.305419C46.9448 0.197892 46.8007 0.115851 46.645 0.0639807C46.3304 -0.0407759 45.9871 -0.0162823 45.6906 0.132073L40.6906 2.63207C40.4388 2.75803 40.2368 2.96534 40.1175 3.22041C39.9982 3.47548 39.9685 3.76336 40.0333 4.03741C40.098 4.31147 40.2534 4.55563 40.4742 4.73035C40.695 4.90506 40.9684 5.00009 41.25 5.00004ZM48.75 12.5H43.75C43.4185 12.5 43.1005 12.6317 42.8661 12.8662C42.6317 13.1006 42.5 13.4185 42.5 13.75C42.5 14.0816 42.6317 14.3995 42.8661 14.6339C43.1005 14.8683 43.4185 15 43.75 15H48.75C49.0815 15 49.3995 14.8683 49.6339 14.6339C49.8683 14.3995 50 14.0816 50 13.75C50 13.4185 49.8683 13.1006 49.6339 12.8662C49.3995 12.6317 49.0815 12.5 48.75 12.5ZM9.30938 2.63207L4.30937 0.132073C4.16256 0.058615 4.00272 0.0147932 3.83897 0.00310989C3.67522 -0.00857342 3.51077 0.0121105 3.35501 0.0639807C3.04045 0.168737 2.78039 0.394163 2.63203 0.690667C2.48368 0.987171 2.45918 1.33046 2.56394 1.64503C2.6687 1.95959 2.89412 2.21966 3.19063 2.36801L8.19062 4.86801C8.36446 4.95442 8.55587 4.9996 8.75 5.00004C9.03159 5.00009 9.30496 4.90506 9.52579 4.73035C9.74663 4.55563 9.90201 4.31147 9.96675 4.03741C10.0315 3.76336 10.0018 3.47548 9.88248 3.22041C9.76317 2.96534 9.56123 2.75803 9.30938 2.63207ZM46.8094 25.1321L41.8094 22.6321C41.5128 22.4837 41.1694 22.4593 40.8547 22.5641C40.5401 22.6689 40.28 22.8944 40.1316 23.1911C39.9833 23.4877 39.9588 23.8311 40.0637 24.1457C40.1685 24.4603 40.394 24.7204 40.6906 24.8688L45.6906 27.3688C45.9872 27.5171 46.3306 27.5416 46.6453 27.4368C46.9599 27.3319 47.22 27.1064 47.3684 26.8098C47.5167 26.5132 47.5412 26.1698 47.4363 25.8552C47.3315 25.5405 47.106 25.2804 46.8094 25.1321V25.1321ZM8.75 22.5C8.55587 22.5005 8.36446 22.5457 8.19062 22.6321L3.19063 25.1321C2.89402 25.2804 2.66849 25.5405 2.56366 25.8552C2.51176 26.011 2.49104 26.1755 2.50271 26.3393C2.51437 26.503 2.55818 26.6629 2.63164 26.8098C2.7051 26.9567 2.80676 27.0876 2.93083 27.1952C3.0549 27.3028 3.19895 27.3849 3.35474 27.4368C3.66937 27.5416 4.01277 27.5171 4.30937 27.3688L9.30938 24.8688C9.56166 24.7431 9.76403 24.5357 9.88366 24.2805C10.0033 24.0253 10.0331 23.7371 9.96833 23.4628C9.90355 23.1884 9.74795 22.944 9.52678 22.7693C9.30562 22.5945 9.03188 22.4996 8.75 22.5V22.5Z" fill="#4EA5D9" />
                            </svg>
                            <h3>Community Driven</h3>
                            <div className={'description'}>
                                You have an idea or want something to be added? Feel free to discuss it with us on discord. We usually add reasonable ideas very fast to offer the best experience for you and your audience.
                            </div>
                        </div>
                    </Card>
                </div>

                <div className={'cardItem'}>
                    <Card>
                        <div className={'cardContent'}>
                            <svg height="55" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5883 7.56328C13.7056 7.67705 13.8624 7.74112 14.0259 7.74214C14.1893 7.74316 14.3468 7.68104 14.4656 7.56875C18.0117 4.29687 22.6156 2.5 27.5 2.5C32.3844 2.5 36.9883 4.29687 40.5336 7.56875C40.6524 7.68104 40.8099 7.74316 40.9734 7.74214C41.1368 7.74112 41.2936 7.67705 41.4109 7.56328L42.3117 6.67734C42.3721 6.61842 42.42 6.54787 42.4524 6.46994C42.4848 6.39202 42.5011 6.30834 42.5003 6.22395C42.4995 6.13955 42.4816 6.0562 42.4477 5.9789C42.4139 5.90161 42.3647 5.83198 42.3031 5.77422C38.2812 2.04531 33.0469 0 27.5 0C21.9531 0 16.7188 2.04531 12.6969 5.77422C12.6353 5.83198 12.5861 5.90161 12.5523 5.9789C12.5184 6.0562 12.5005 6.13955 12.4997 6.22395C12.4989 6.30834 12.5152 6.39202 12.5476 6.46994C12.58 6.54787 12.6279 6.61842 12.6883 6.67734L13.5883 7.56328ZM27.5 8.75C24.0301 8.73642 20.6787 10.0115 18.0953 12.3281C18.0326 12.3857 17.9823 12.4556 17.9476 12.5333C17.9128 12.6111 17.8943 12.6951 17.8932 12.7803C17.8921 12.8654 17.9085 12.9499 17.9412 13.0286C17.9739 13.1072 18.0224 13.1783 18.0836 13.2375L18.9844 14.1203C19.1018 14.233 19.2577 14.2969 19.4205 14.2989C19.5833 14.3009 19.7407 14.241 19.8609 14.1313C21.9737 12.2742 24.6903 11.25 27.5031 11.25C30.316 11.25 33.0326 12.2742 35.1453 14.1313C35.2655 14.241 35.423 14.3009 35.5858 14.2989C35.7485 14.2969 35.9044 14.233 36.0219 14.1203L36.9195 13.2375C36.9807 13.1783 37.0292 13.1072 37.0619 13.0286C37.0947 12.9499 37.111 12.8654 37.1099 12.7803C37.1088 12.6951 37.0903 12.6111 37.0555 12.5333C37.0208 12.4556 36.9705 12.3857 36.9078 12.3281C34.3236 10.0108 30.971 8.73565 27.5 8.75V8.75ZM41.25 25H28.75V18.125C28.75 17.9592 28.6842 17.8003 28.5669 17.6831C28.4497 17.5658 28.2908 17.5 28.125 17.5H26.875C26.7092 17.5 26.5503 17.5658 26.4331 17.6831C26.3158 17.8003 26.25 17.9592 26.25 18.125V25H3.75C2.75544 25 1.80161 25.3951 1.09835 26.0983C0.395088 26.8016 0 27.7554 0 28.75L0 36.25C0 37.2446 0.395088 38.1984 1.09835 38.9017C1.80161 39.6049 2.75544 40 3.75 40H41.25C42.2446 40 43.1984 39.6049 43.9016 38.9017C44.6049 38.1984 45 37.2446 45 36.25V28.75C45 27.7554 44.6049 26.8016 43.9016 26.0983C43.1984 25.3951 42.2446 25 41.25 25ZM42.5 36.25C42.5 36.5815 42.3683 36.8995 42.1339 37.1339C41.8995 37.3683 41.5815 37.5 41.25 37.5H3.75C3.41848 37.5 3.10054 37.3683 2.86612 37.1339C2.6317 36.8995 2.5 36.5815 2.5 36.25V28.75C2.5 28.4185 2.6317 28.1005 2.86612 27.8661C3.10054 27.6317 3.41848 27.5 3.75 27.5H41.25C41.5815 27.5 41.8995 27.6317 42.1339 27.8661C42.3683 28.1005 42.5 28.4185 42.5 28.75V36.25ZM14.375 30.625C14.0042 30.625 13.6416 30.735 13.3333 30.941C13.025 31.147 12.7846 31.4399 12.6427 31.7825C12.5008 32.1251 12.4637 32.5021 12.536 32.8658C12.6084 33.2295 12.787 33.5636 13.0492 33.8258C13.3114 34.088 13.6455 34.2666 14.0092 34.339C14.3729 34.4113 14.7499 34.3742 15.0925 34.2323C15.4351 34.0904 15.728 33.85 15.934 33.5417C16.14 33.2334 16.25 32.8708 16.25 32.5C16.25 32.0027 16.0525 31.5258 15.7008 31.1742C15.3492 30.8225 14.8723 30.625 14.375 30.625ZM8.125 30.625C7.75416 30.625 7.39165 30.735 7.08331 30.941C6.77496 31.147 6.53464 31.4399 6.39273 31.7825C6.25081 32.1251 6.21368 32.5021 6.28603 32.8658C6.35837 33.2295 6.53695 33.5636 6.79917 33.8258C7.0614 34.088 7.39549 34.2666 7.75921 34.339C8.12292 34.4113 8.49992 34.3742 8.84253 34.2323C9.18514 34.0904 9.47798 33.85 9.68401 33.5417C9.89003 33.2334 10 32.8708 10 32.5C10 32.0027 9.80246 31.5258 9.45083 31.1742C9.09919 30.8225 8.62228 30.625 8.125 30.625Z" fill="#353535" />
                            </svg>
                            <h3>Uptime</h3>
                            <div className={'description'}>
                                This is only a hobby project. We do not offer any high availability. In rare cases, a patch can even break our system. This should not happen at all, but there is no guarantee. That does not mean we do not care. We usually have a downtime of 15 minutes/month.
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>

        <style jsx>{`
            .cardGrid {
                padding-bottom: 10px;
                display: flex;
                align-items: stretch;
                justify-content: space-evenly;
                flex-wrap: wrap;
            }

            .cardItem {
                margin-left: 1rem;
                margin-right: 1rem;
                margin-bottom: 2rem;
                width: 30%;
            }

            .cardContent {
                padding: 3rem 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .description {
                color: #444;
                font-size: .8rem;
            }

            @media screen and (max-width: 1200px) {
                .cardGrid {
                    flex-wrap: wrap;
                }

                .cardItem {
                    width: 40%;
                    margin-left: 2rem;
                    margin-right: 2rem;
                    margin-bottom: 4rem;
                }
            }

            @media screen and (max-width: 900px) {
                .cardItem {
                    width: 70%;
                }
            }

            @media screen and (max-width: 700px) {
                .cardItem {
                    width: 95%;
                }

                .cardContent {
                    padding: 2rem 1.5rem;
                }
            }

        `}</style>
    </Section>
}