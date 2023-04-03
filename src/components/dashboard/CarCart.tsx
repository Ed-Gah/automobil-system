import React from "react";

export default function CarCart({
  name,
  description,
  imageUrl,
  onClick,
  engine,
  type,
  bid,
  fuelType,
  mileage,
  price,
}: any) {
  return (
    <div>
      <div
        className="max-w-sm bg-[var(--text-300)] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
        onClick={onClick}
      >
        <a>
          <div className=" flex justify-between relative top-4 mx-8">
            <div className="">
              <h1 className=" text-[11px] text-[var(--text-100)] bg-[var(--app-bg-color)] px-3 py-1 rounded-2xl">
                {bid ? bid : 0} {bid > 0 ? "Bids" : "Bid"}
              </h1>
            </div>
            <div>
              <svg
                className=" bg-[var(--text-100)] rounded-full p-1"
                width="25"
                height="25"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_2_431" fill="white">
                  <path d="M16.3425 1.68989C15.3892 0.734099 14.1255 0.150737 12.7797 0.0451835C11.4339 -0.0603702 10.0947 0.318844 9.00402 1.11433C7.85977 0.26324 6.43555 -0.122683 5.01815 0.0342723C3.60075 0.191228 2.29546 0.879403 1.36514 1.96022C0.434824 3.04103 -0.0514264 4.4342 0.00431262 5.85917C0.0600516 7.28414 0.653639 8.63507 1.66554 9.63991L7.25034 15.2337C7.718 15.694 8.34786 15.9519 9.00402 15.9519C9.66018 15.9519 10.29 15.694 10.7577 15.2337L16.3425 9.63991C17.3925 8.58345 17.9819 7.15443 17.9819 5.6649C17.9819 4.17538 17.3925 2.74636 16.3425 1.68989ZM15.0745 8.39885L9.48966 13.9836C9.4261 14.0478 9.35046 14.0988 9.26711 14.1335C9.18375 14.1683 9.09434 14.1862 9.00402 14.1862C8.91371 14.1862 8.82429 14.1683 8.74093 14.1335C8.65758 14.0988 8.58194 14.0478 8.51839 13.9836L2.93359 8.37187C2.2283 7.65092 1.83336 6.68246 1.83336 5.6739C1.83336 4.66534 2.2283 3.69687 2.93359 2.97593C3.65229 2.26635 4.62159 1.86847 5.63156 1.86847C6.64152 1.86847 7.61083 2.26635 8.32953 2.97593C8.41313 3.06022 8.5126 3.12712 8.62219 3.17278C8.73178 3.21844 8.84933 3.24194 8.96805 3.24194C9.08677 3.24194 9.20432 3.21844 9.31391 3.17278C9.4235 3.12712 9.52296 3.06022 9.60657 2.97593C10.3253 2.26635 11.2946 1.86847 12.3045 1.86847C13.3145 1.86847 14.2838 2.26635 15.0025 2.97593C15.7175 3.68743 16.1254 4.65064 16.1388 5.65922C16.1523 6.66781 15.7702 7.64156 15.0745 8.37187V8.39885Z" />
                </mask>
                <path
                  d="M16.3425 1.68989L17.761 0.280003L17.7586 0.27752L16.3425 1.68989ZM9.00402 1.11433L7.8104 2.71909L8.99239 3.59825L10.1826 2.7302L9.00402 1.11433ZM1.66554 9.63991L3.08091 8.22682L3.0748 8.22076L1.66554 9.63991ZM7.25034 15.2337L5.83499 16.6468L5.8412 16.653L5.84746 16.6592L7.25034 15.2337ZM10.7577 15.2337L12.1606 16.6592L12.1668 16.653L12.1731 16.6468L10.7577 15.2337ZM16.3425 9.63991L17.7579 11.053L17.761 11.0498L16.3425 9.63991ZM15.0745 8.39885L16.4887 9.81306L17.0745 9.22727V8.39885H15.0745ZM9.48966 13.9836L8.07543 12.5694L8.0686 12.5763L9.48966 13.9836ZM8.51839 13.9836L9.93944 12.5763L9.936 12.5728L8.51839 13.9836ZM2.93359 8.37187L1.50393 9.77047L1.50993 9.77659L1.51597 9.78267L2.93359 8.37187ZM1.83336 5.6739L-0.166635 5.6739L1.83336 5.6739ZM2.93359 2.97593L1.52844 1.55271L1.51608 1.56491L1.50393 1.57732L2.93359 2.97593ZM5.63156 1.86847L5.63156 3.86847L5.63156 1.86847ZM8.32953 2.97593L9.74953 1.56752L9.74214 1.56008L9.73468 1.55271L8.32953 2.97593ZM9.60657 2.97593L8.20142 1.55271L8.19395 1.56008L8.18657 1.56752L9.60657 2.97593ZM12.3045 1.86847L12.3045 3.86847L12.3045 1.86847ZM15.0025 2.97593L16.4133 1.55825L16.4077 1.55271L15.0025 2.97593ZM15.0745 8.37187L13.6264 6.99232L13.0745 7.57168V8.37187H15.0745ZM17.7586 0.27752C16.4682 -1.0162 14.7577 -1.80582 12.9361 -1.94869L12.6233 2.03906C13.4933 2.10729 14.3102 2.4844 14.9264 3.10227L17.7586 0.27752ZM12.9361 -1.94869C11.1144 -2.09157 9.30176 -1.57828 7.82548 -0.501544L10.1826 2.7302C10.8876 2.21597 11.7533 1.97083 12.6233 2.03906L12.9361 -1.94869ZM10.1976 -0.490441C8.64754 -1.6434 6.71816 -2.1662 4.79802 -1.95358L5.23827 2.02212C6.15294 1.92084 7.07201 2.16988 7.8104 2.71909L10.1976 -0.490441ZM4.79802 -1.95358C2.87789 -1.74095 1.10964 -0.808689 -0.150657 0.655476L2.88095 3.26496C3.48129 2.56749 4.32361 2.12341 5.23827 2.02212L4.79802 -1.95358ZM-0.150657 0.655476C-1.41095 2.11964 -2.06967 4.00695 -1.99416 5.93734L2.00278 5.781C1.96682 4.86145 2.2806 3.96242 2.88095 3.26496L-0.150657 0.655476ZM-1.99416 5.93734C-1.91865 7.86773 -1.11452 9.69782 0.256288 11.0591L3.0748 8.22076C2.4218 7.57232 2.03875 6.70055 2.00278 5.781L-1.99416 5.93734ZM0.250191 11.053L5.83499 16.6468L8.66569 13.8206L3.08089 8.22684L0.250191 11.053ZM5.84746 16.6592C6.68924 17.4876 7.82296 17.9519 9.00402 17.9519V13.9519C8.87277 13.9519 8.74677 13.9003 8.65322 13.8082L5.84746 16.6592ZM9.00402 17.9519C10.1851 17.9519 11.3188 17.4876 12.1606 16.6592L9.35482 13.8082C9.26127 13.9003 9.13528 13.9519 9.00402 13.9519V17.9519ZM12.1731 16.6468L17.7578 11.053L14.9271 8.22684L9.34235 13.8206L12.1731 16.6468ZM17.761 11.0498C19.1835 9.61862 19.9819 7.68274 19.9819 5.6649H15.9819C15.9819 6.62611 15.6016 7.54827 14.924 8.23002L17.761 11.0498ZM19.9819 5.6649C19.9819 3.64706 19.1835 1.71119 17.761 0.280005L14.924 3.09978C15.6016 3.78153 15.9819 4.70369 15.9819 5.6649H19.9819ZM13.6602 6.98463L8.07544 12.5694L10.9039 15.3979L16.4887 9.81306L13.6602 6.98463ZM8.0686 12.5763C8.19102 12.4527 8.33672 12.3546 8.49727 12.2876L10.037 15.9794C10.3642 15.8429 10.6612 15.6429 10.9107 15.391L8.0686 12.5763ZM8.49727 12.2876C8.65781 12.2207 8.83005 12.1862 9.00402 12.1862V16.1862C9.35862 16.1862 9.70969 16.1159 10.037 15.9794L8.49727 12.2876ZM9.00402 12.1862C9.17799 12.1862 9.35023 12.2207 9.51078 12.2876L7.97109 15.9794C8.29835 16.1159 8.64942 16.1862 9.00402 16.1862V12.1862ZM9.51078 12.2876C9.67132 12.3546 9.81702 12.4527 9.93944 12.5763L7.09733 15.391C7.34686 15.6429 7.64383 15.8429 7.97109 15.9794L9.51078 12.2876ZM9.936 12.5728L4.3512 6.96106L1.51597 9.78267L7.10077 15.3944L9.936 12.5728ZM4.36324 6.97326C4.02357 6.62605 3.83336 6.15963 3.83336 5.6739L-0.166635 5.6739C-0.166635 7.20528 0.433032 8.67579 1.50393 9.77047L4.36324 6.97326ZM3.83336 5.6739C3.83336 5.18816 4.02357 4.72174 4.36324 4.37453L1.50393 1.57732C0.433031 2.672 -0.166635 4.14251 -0.166635 5.6739L3.83336 5.6739ZM4.33874 4.39914C4.68313 4.05913 5.1476 3.86847 5.63156 3.86847L5.63156 -0.131529C4.09559 -0.131529 2.62145 0.473571 1.52844 1.55271L4.33874 4.39914ZM5.63156 3.86847C6.11551 3.86847 6.57999 4.05913 6.92438 4.39914L9.73468 1.55271C8.64167 0.47357 7.16753 -0.131529 5.63156 -0.131529L5.63156 3.86847ZM6.90953 4.38433C7.17906 4.65608 7.49972 4.87177 7.85304 5.01897L9.39134 1.32659C9.52547 1.38247 9.64721 1.46436 9.74953 1.56752L6.90953 4.38433ZM7.85304 5.01897C8.20635 5.16616 8.58531 5.24194 8.96805 5.24194V1.24194C9.11335 1.24194 9.25721 1.27071 9.39134 1.32659L7.85304 5.01897ZM8.96805 5.24194C9.35079 5.24194 9.72975 5.16616 10.0831 5.01897L8.54475 1.32659C8.67888 1.27071 8.82275 1.24194 8.96805 1.24194V5.24194ZM10.0831 5.01897C10.4364 4.87177 10.757 4.65608 11.0266 4.38433L8.18657 1.56752C8.28889 1.46436 8.41062 1.38247 8.54475 1.32659L10.0831 5.01897ZM11.0117 4.39914C11.3561 4.05913 11.8206 3.86847 12.3045 3.86847L12.3045 -0.131529C10.7686 -0.131529 9.29443 0.473571 8.20142 1.55271L11.0117 4.39914ZM12.3045 3.86847C12.7885 3.86847 13.253 4.05913 13.5974 4.39914L16.4077 1.55271C15.3146 0.473571 13.8405 -0.131529 12.3045 -0.131529L12.3045 3.86847ZM13.5917 4.39359C13.9361 4.73625 14.1325 5.20014 14.139 5.68589L18.1387 5.63256C18.1182 4.10113 17.4989 2.6386 16.4133 1.55827L13.5917 4.39359ZM14.139 5.68589C14.1455 6.17163 13.9615 6.6406 13.6264 6.99232L16.5225 9.75141C17.5789 8.64251 18.1591 7.16399 18.1387 5.63256L14.139 5.68589ZM13.0745 8.37187V8.39885H17.0745V8.37187H13.0745Z"
                  fill="#870000"
                  mask="url(#path-1-inside-1_2_431)"
                />
              </svg>
            </div>
          </div>
          <img
            className=" w-full"
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.wallpapersafari.com/81/69/cbQoSy.jpg"
            }
            alt=""
          />
          <div className=" float-right relative -top-8 right-6">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.60989 8.81052L9.38783 12.7538L9.39273 12.7566L9.39274 12.7566C9.63668 12.8949 9.91228 12.9675 10.1927 12.9675C10.4731 12.9675 10.7487 12.8949 10.9926 12.7566L10.9961 12.7546C11.2404 12.6136 11.4432 12.4107 11.5843 12.1664C11.7253 11.9221 11.7995 11.645 11.7995 11.3629L2.60989 8.81052ZM2.60989 8.81052V8.83803L1.86003 8.40545C1.61564 8.26446 1.41268 8.0616 1.27156 7.81728C1.13045 7.57296 1.05615 7.29579 1.05615 7.01364C1.05615 6.73149 1.13045 6.45432 1.27156 6.21C1.41263 5.96576 1.61551 5.76296 1.85979 5.62197C1.85987 5.62193 1.85995 5.62188 1.86003 5.62183L9.38917 1.2727L9.38912 1.2726L9.39849 1.26745C9.63903 1.13528 9.908 1.0633 10.1824 1.05767L10.1914 1.05749L10.2005 1.05763C10.4767 1.06195 10.7475 1.13443 10.989 1.26864L10.989 1.26858L10.9961 1.27265C11.2404 1.4137 11.4432 1.61658 11.5843 1.8609C11.7253 2.10519 11.7995 2.3823 11.7995 2.66437C11.7995 2.6644 11.7995 2.66443 11.7995 2.66446V11.3628L2.60989 8.81052ZM9.10986 0.790225L9.10986 0.790227L9.10858 0.790965L1.83045 4.96496V5.026L1.5809 5.17043C1.25221 5.36066 0.979327 5.63398 0.789616 5.96297C0.599905 6.29196 0.500041 6.66505 0.500041 7.04482C0.500041 7.42459 0.599905 7.79768 0.789616 8.12667C0.979189 8.45542 1.25182 8.72858 1.58019 8.91879C1.58042 8.91893 1.58066 8.91907 1.5809 8.91921L9.10858 13.2363L9.10995 13.2371C9.43925 13.4274 9.81269 13.5279 10.193 13.5286C10.7672 13.5285 11.318 13.3004 11.724 12.8943L12.0776 13.2478L11.724 12.8943C12.1302 12.4881 12.3584 11.9373 12.3584 11.3629V2.69555H12.3583L12.3584 2.68995C12.3627 2.30774 12.2657 1.93121 12.0774 1.59861C11.8891 1.266 11.6161 0.989155 11.2861 0.796202C10.9562 0.603249 10.581 0.501058 10.1988 0.500008C9.81656 0.498958 9.44087 0.599087 9.10986 0.790225Z"
                stroke="white"
              />
            </svg>
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className=" font-medium text-[var(--secondary-900)] text-2xl">
              Price: {price}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Name: </strong> {name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Engine: </strong> {engine}
          </p>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Type: {type}
          </p> */}

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Mileage: </strong>
            {mileage}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Fuel type: </strong> {fuelType}
          </p>

          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p> */}
          <button className=" bg-[var(--secondary-500)] w-full text-[var(--text-400)] font-medium text-[18px] rounded-lg py-2">
            Place off your bid
          </button>
        </div>
      </div>
    </div>
  );
}