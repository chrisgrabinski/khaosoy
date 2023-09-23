import React, { SVGProps } from "react";

export const RemoteLogo = React.forwardRef<SVGSVGElement, SVGProps<SVGElement>>(
  (props, ref) => {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 90 21"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <title>Remote</title>
        <path d="M14.7214 15.4396H14.9721V20.0283H14.2214C9.3466 20.0283 6.5261 17.2477 6.5261 12.7081V10.3737L8.1101 9.9754C8.574 9.8579 8.9956 9.6125 9.327 9.2669C9.6584 8.9214 9.8862 8.4897 9.9846 8.0209C10.0829 7.5522 10.0478 7.0652 9.8832 6.6154C9.7186 6.1657 9.4312 5.7712 9.0537 5.4769C8.6761 5.1826 8.2236 5.0003 7.7477 4.9508C7.2717 4.9013 6.7915 4.9865 6.3615 5.1968C5.9316 5.4071 5.5693 5.7339 5.3158 6.1402C5.0623 6.5465 4.9279 7.0158 4.9278 7.4948V17.496H3.40931e-06V7.3215C-0.000296591 7.0153 0.0192032 6.7095 0.0581032 6.4058C0.518103 2.7949 3.6681 0 7.486 0C10.9474 0 13.8609 2.2982 14.7214 5.4203C15.1687 7.0555 15.0236 8.7965 14.3118 10.3349C13.7087 11.6332 12.7419 12.7281 11.5288 13.4867C11.9358 15.1383 12.8015 15.4435 14.7214 15.4435" />
        <path d="M26.9254 6.6218V9.4257H26.4667C25.5029 9.4257 24.7509 9.6908 24.2109 10.2211C23.6708 10.7514 23.4016 11.4717 23.4033 12.3822V17.4378H20.6901V6.7951H23.4033V8.1712C24.2182 7.1365 25.2402 6.6192 26.4693 6.6192L26.9254 6.6218Z" />
        <path d="M38.5809 13.0988H30.3467C30.5162 13.7418 30.9012 14.307 31.4372 14.6999C32.0071 15.1048 32.6935 15.3123 33.3921 15.291C33.9802 15.2976 34.562 15.1703 35.0937 14.9185C35.5682 14.7027 35.9865 14.38 36.3159 13.9757L38.1248 15.5664C37.556 16.2429 36.84 16.78 36.0317 17.1365C35.1735 17.5149 34.2444 17.705 33.3068 17.6939C32.2529 17.7094 31.2122 17.4571 30.2821 16.9606C29.4033 16.4944 28.6703 15.7939 28.1645 14.9366C27.6677 14.0738 27.4041 13.0963 27.3996 12.1005C27.3951 11.1047 27.6498 10.1249 28.1387 9.2576C28.6223 8.4195 29.3267 7.7305 30.1749 7.2659C31.0553 6.7795 32.0467 6.5299 33.0523 6.5417C34.6475 6.5417 35.9787 7.0732 37.0459 8.1363C38.1131 9.1994 38.6476 10.5324 38.6493 12.1353C38.648 12.4576 38.6251 12.7795 38.5809 13.0988ZM34.7564 9.515C34.2648 9.1288 33.6579 8.9189 33.0329 8.9189C32.4079 8.9189 31.801 9.1288 31.3093 9.515C30.813 9.9233 30.4655 10.4844 30.3209 11.111H35.7474C35.6031 10.484 35.255 9.9226 34.7577 9.515H34.7564Z" />
        <path d="M56.0371 7.6216C56.7632 8.3415 57.1263 9.305 57.1263 10.5121V17.4443H54.413V11.3179C54.413 10.6643 54.2243 10.1427 53.8471 9.753C53.4698 9.3632 52.9655 9.1675 52.3341 9.1658C51.6691 9.1658 51.1295 9.3667 50.7152 9.7685C50.3009 10.1703 50.0937 10.7005 50.0937 11.3593V17.4379H47.3804V11.3179C47.3804 10.6721 47.1888 10.1522 46.8055 9.7581C46.4222 9.3641 45.9097 9.1667 45.268 9.1658C44.9727 9.1541 44.678 9.2019 44.4015 9.3063C44.1249 9.4107 43.8722 9.5696 43.6581 9.7737C43.4508 9.9807 43.2887 10.2285 43.182 10.5014C43.0752 10.7743 43.0262 11.0664 43.0379 11.3593V17.4379H40.3298V6.7938H43.0431V7.8932C43.8433 6.9887 44.892 6.5369 46.1892 6.5378C46.8754 6.524 47.5544 6.6799 48.166 6.9917C48.7309 7.2846 49.2046 7.727 49.5356 8.2708C50.4141 7.1155 51.62 6.5378 53.1533 6.5378C54.3566 6.5404 55.3178 6.9016 56.0371 7.6216Z" />
        <path d="M70.1169 12.1184C70.1169 13.7015 69.5703 15.0267 68.4773 16.0941C67.3842 17.1615 66.0258 17.6939 64.4022 17.6914C62.7794 17.6914 61.4197 17.1581 60.3232 16.0915C59.2267 15.025 58.6776 13.6997 58.6759 12.1159C58.6759 10.5328 59.225 9.2072 60.3232 8.1389C61.4215 7.0706 62.7811 6.5373 64.4022 6.5391C66.025 6.5391 67.3833 7.0723 68.4773 8.1389C69.5712 9.2055 70.1177 10.532 70.1169 12.1184ZM66.4992 14.2227C67.029 13.6501 67.3234 12.8983 67.3234 12.1178C67.3234 11.3373 67.029 10.5855 66.4992 10.0129C66.2254 9.7384 65.9003 9.5205 65.5423 9.3719C65.1844 9.2233 64.8007 9.1468 64.4132 9.1468C64.0257 9.1468 63.642 9.2233 63.284 9.3719C62.9261 9.5205 62.6009 9.7384 62.3272 10.0129C61.7912 10.5804 61.4925 11.3317 61.4925 12.1126C61.4925 12.8936 61.7912 13.6449 62.3272 14.2123C62.886 14.7539 63.6334 15.0567 64.4112 15.0567C65.1891 15.0567 65.9364 14.7539 66.4953 14.2123L66.4992 14.2227Z" />
        <path d="M75.0723 9.2731V13.6989C75.0723 14.6094 75.5611 15.0646 76.5387 15.0646C77.024 15.0467 77.4998 14.925 77.9341 14.7077V17.2374C77.3211 17.5545 76.6381 17.712 75.9483 17.6952C74.7596 17.6952 73.8646 17.3779 73.2634 16.7433C72.6622 16.1087 72.3607 15.2405 72.359 14.1386V9.2757H70.6677V6.7951H72.359V5.022L75.0723 4.0934V6.7951H77.9341V9.2731H75.0723Z" />
        <path d="M89.943 13.0988H81.7024C81.8719 13.7418 82.2569 14.307 82.7929 14.6999C83.3627 15.105 84.0492 15.3125 84.7477 15.2909C85.335 15.2978 85.917 15.1704 86.448 14.9185C86.923 14.703 87.342 14.3803 87.672 13.9756L89.48 15.5664C88.912 16.2429 88.196 16.78 87.387 17.1365C86.529 17.5157 85.6 17.7067 84.6624 17.6965C83.6085 17.7121 82.5678 17.4598 81.6378 16.9632C80.7588 16.4966 80.0256 15.7962 79.5189 14.9392C79.0227 14.0761 78.7595 13.0987 78.7552 12.1029C78.7509 11.1072 79.0056 10.1275 79.4943 9.2602C79.9779 8.4217 80.6823 7.7323 81.5306 7.2672C82.411 6.7808 83.4024 6.5312 84.4079 6.5429C86.003 6.5429 87.334 7.0749 88.4 8.1389C89.467 9.2029 90 10.5367 90 12.1404C90.002 12.4608 89.983 12.7809 89.943 13.0988ZM86.122 9.515C85.631 9.1288 85.024 8.9189 84.3989 8.9189C83.7739 8.9189 83.167 9.1288 82.6753 9.515C82.179 9.9233 81.8315 10.4844 81.6869 11.1109H87.113C86.968 10.4823 86.617 9.92 86.117 9.5124L86.122 9.515Z" />
      </svg>
    );
  },
);
