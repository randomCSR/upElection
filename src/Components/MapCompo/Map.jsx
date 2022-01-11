import React from "react"
import { Link } from 'react-router-dom';
 import ReactTooltip from 'react-tooltip';
//  import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

 function Map(props){
  const name = props.name;
  // const key = props.id;
  // const url = "http://www.google.com/search?q="+name+" "+key;
     const url = "/infopage/"+name;
//   const fillConsti = {items}==props.class?fill={red}: " ";
  

     return (<> 
      <Link to = {url}>
        {props.points}==undefined?
        {/* <Tippy content="Hello"> */}
        <g data-tip data-for="singleBox">
            <path 
              // data-id = {props.dataId} 
              // data-name = {props.name}
              className = {props.class}
            //   fill= {fillConsti}
              d={props.dd} 
            />  
           </g> 
             
               
                :
                
              <g data-tip data-for="singleBox"> 
            <polygon 
              // data-name = {props.name} 
              // data-id = {props.dataId} 
              className = {props.class}
            //   fill= {fillConsti}
              points = {props.points}
              
            />
            
            </g> 
            {/* <ReactTooltip id = "singleBox" effect="solid" type="light" >
            <span>
            
            <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>{props.class}</h2>
            
          <p>{props.name}</p>
          <p>Candidate party</p>
          <p>Party Logo</p>          
          </span>
      </ReactTooltip> */}
          
              
              
             
               {/* </Tippy> */}
      </Link>
      
     
     
     
             
     </>
)   







































    // <div>
    //   <p style={{color:"red"}}> {props.id} </p>
    //   <p style={{color:"red"}}> {props.class} </p>
    //   <p style={{color:"red"}}> {props.name} </p>
    //   <p style={{color:"red"}}> {props.points} </p>
    // </div>
     


// const Map = ({ fill }) => {
//     return (
        
//     <div className = "mapdiv">






























      
          
//         <span className = "box" title = "Mohammadabad  Harendra  Candidate   Party   PARTY LOGO">
//             {/* <svg width="1200px" height="960px" version="1.1" id="Layer_1" xmlns="http:www.w3.org/2000/svg"  x="0px" y="0px"
// 	             viewBox="0 0 800 800" > */}
//         <svg version="1.1" id="Layer_1" xmlns="http:www.w3.org/2000/svg" viewBox="0 0 1100 1100" >
           
//         {/* <g fill={fill} stroke="#000000" strokeMiterlimit="10"  > */}
        
       
        
        
//         <polygon  data-name="Duddhi(ST)" data-id="cns-403" id="_x34_03_2_" className="st1"  points="827,881.7 848.7,889.7 845.7,908.3 821.7,938.7 789.7,941.7 757,911.3 765.7,901.3 803,901 807,884 "/>
//       <polygon  data-name="Obra(ST)" data-id="cns-402" id="_x34_02_2_" className="st1" points="810,841 771,855.7 766.3,862 769.7,884.3 765.7,901.3 803,901 807,884 827,881.7 "/>
//         <polygon  data-name="Robertsganj" data-id="cns-401" id="_x34_01_2_" className="st0" points="859.3,863.7 866.7,848.3 849.7,830.7 829.3,837.7 812,829 810,841 827,881.7 848.7,889.7 855.3,883 "/>
//         <polygon  data-name="Ghorawal" data-id="cns-400" id="_x34_00_2_" className="st0" points="772.7,848.7 742.3,846.3 745.3,826.7 762.7,827 793.7,822 809.7,808 812,828 810,841 771,855.7 772.7,850 "/>
//          <polygon  data-name="Marihan" data-id="cns-399" id="_x33_99_2_" className="st0" points="793,779 772.3,775 753,805 736,805.7 734.7,817.7 745.3,826.7 762.7,827 793.7,822 809.7,808 808.3,799.7 820.3,785.7 813.4,777.2 802.7,767.7 "/>
//          <polygon  data-name="Chunar" data-id="cns-398" id="_x33_98_2_" className="st0" points="841.7,730.3 869.3,732.3 859.3,752 849.7,743.7 824,740.3 "/>
//          <polygon  data-name="Majhawan" data-id="cns-397" id="_x33_97_2_" className="st1" points="820.3,757.7 817,766 802.7,767.7 802.1,768.4 793,779 772.3,775 "/>
//          <polygon  data-name="Mirzapur" data-id="cns-396" id="_x33_96_2_" className="st0" points="762.7,759 726.7,742.3 721,752.3 730,773 754.3,776.7 772.3,775 "/>
//          <polygon  data-name="Chhanbey(SC)" data-id="cns-395" id="_x33_95_2_" className="st0" points="734.7,817.7 745.3,826.7 742.3,846.3 729,845.3 729.3,854 711.7,851.7 702.7,833.3 688.7,826.7 709,808.7 714,802.5 717.3,797.2 717.8,791.6 712.8,779.9 705.5,769.8 711.2,770.5 716.5,773 721,779 726,776.4 730,773 754.3,776.7 772.3,775 753,805 736,805.7 "/>
//          <polygon  data-name="Aurai(SC)" data-id="cns-394" id="_x33_94_2_" className="st0" points="740.3,744 738,748 752,754 758.8,737.3 741.5,731.7 733,732.7 "/>
//          <polygon  data-name="Gyanpur" data-id="cns-393" id="_x33_93_2_" className="st0" points="714,766 720,759.5 721,752.3 730,773 726,776.4 721,779 716.5,773 711.2,770.5 705.5,769.8 "/>
//          <polygon  data-name="Bhadohi" data-id="cns-392" id="_x33_92_2_" className="st0" points="714.7,728.3 718.7,722.7 726,724 733,732.7 740.3,744 738,748 726.7,742.3 721,752.3 714.5,745.8 717.3,739.7 697,731.7 "/>
//          <polygon  data-name="Sevapuri" data-id="cns-391" id="_x33_91_2_" className="st1" points="761.5,739.3 758.8,737.3 752,754 762.7,759 766.3,739.7 "/>
//          <polygon  data-name="Varanasi Cantt" data-id="cns-390" id="_x33_90_2_" className="st0" points="818,752.7 815.5,750.3 815.7,745.8 811.1,747.6 807.8,747.3 805.3,744.5 801,741.2 799.5,745.8 795.5,747.6 797.1,751 799.5,754 800.4,757.8 801.3,764.6 819.3,758 820.3,757.7 "/>
//          <polygon  data-name="Varanasi South" data-id="cns-389" id="_x33_89_2_" className="st0" points="797.1,751 799.5,754 800.4,757.8 801.3,764.6 785.5,770.2 782.8,765.7 782.5,760.7 781.3,756 774.9,752.6 779.7,749.7 786.4,748.1 791.8,746.6 795.5,747.6 "/>
//          <polygon  data-name="Varanasi North" data-id="cns-388" id="_x33_88_2_" className="st0" points="785.5,770.2 782.8,765.7 782.5,760.7 781.3,756 774.9,752.6 773,753.8 762.7,759 772.3,775 "/>
//          <polygon  data-name="Rohaniya" data-id="cns-387" id="_x33_87_2_" className="st1" points="773,753.8 779.7,749.7 786.4,748.1 783.8,742.8 792.7,738 774.9,738.8 766.3,739.7 762.7,759 "/>
//          <polygon  data-name="Shivpur" data-id="cns-386" id="_x33_86_2_" className="st0" points="783.8,742.8 783.8,743.3 786.4,748.1 787.8,747.6 791.8,746.6 795.5,747.6 799.5,745.8 801,741.2 805.3,744.5 808.7,737 792.7,738 "/>
//          <polygon  data-name="Ajagara(SC)" data-id="cns-385" id="_x33_85_2_" className="st0" points="805.3,744.5 807.8,747.3 811.1,747.6 815.7,745.8 817,743.6 824,740.3 808.7,737 "/>
//          <polygon  data-name="Pindra" data-id="cns-384" id="_x33_84_2_" className="st0" points="820.3,757.7 818,752.7 815.5,750.3 815.7,745.8 817,743.6 824,740.3 "/>
//          <polygon  data-name="Chakia(SC)" data-id="cns-383" id="_x33_83_2_" className="st1" points="847.7,824.7 845,817.7 841.7,790 843,783.7 823.7,775.3 813.7,777.5 820.3,785.7 808.3,799.7 809.7,808 812,829 829.3,837.7 849.7,830.7 "/>
//          <polygon  data-name="Saiyadraja" data-id="cns-382" id="_x33_82_2_" className="st0" points="851,776.7 866.3,767 865.7,758 859.3,752 849.7,743.7 839.7,768 837,781.7 843,783.7 "/>
//          <polygon  data-name="Sakaldiha" data-id="cns-381" id="_x33_81_2_" className="st0" points="817,766 802.7,767.7 813,777.7 823.7,775.3 "/>
//          <polygon  data-name="Mughalsarai" data-id="cns-380" id="_x33_80_1_" className="st0" points="817,766 823.7,775.3 837.1,781.1 839.7,768 849.7,743.7 824,740.3 820.3,757.7 "/>
//          <polygon  data-name="Zamania" data-id="cns-379" id="_x33_79_2_" className="st1" points="889,757.3 908,741 891.7,738.7 879.7,736.7 869.3,732.3 859.3,752 865.7,758 866.3,767 876.3,765 "/>
//          <polygon  data-name="Mohammadabad" data-id="cns-378" id="_x33_78_2_" className="st0" points="912,739.7 915.7,726.3 912,723 886,721.7 869.3,732.3 879.7,736.7 908,741 "/>
//          <polygon  data-name="Zahoorabad" data-id="cns-377" id="_x33_77_2_" className="st1" points="916.3,714 900,707.3 880,695 867.7,699.7 879.3,713.7 886,721.7 912,723 915.7,726.3 "/>
//          <polygon  data-name="Jangipur" data-id="cns-376" id="_x33_76_2_" className="st1" points="858.3,703 869.3,732.3 886,721.7 867.7,699.7 863,699 "/>
//          <polygon  data-name="Ghazipur" data-id="cns-375" id="_x33_75_1_" className="st0" points="824,740.3 841.7,730.3 868.5,732.3 845,721.3 833,712 "/>
//          <polygon  data-name="Saidpur(SC)" data-id="cns-374" id="_x33_74_1_" className="st1" points="821.3,723.3 808.7,722.7 808.7,737 824,740.3 833,712 825,712 "/>
//          <polygon  data-name="Jakhanian(SC)" data-id="cns-373" id="_x33_73_2_" className="st0" points="849,703.7 833,712 845,721.3 869.3,732.3 858.3,703 "/>
//          <polygon  data-name="Kerakat(SC)" data-id="cns-372" id="_x33_72_2_" className="st0" points="791,712 808.7,722.7 808.7,737 792.7,738 789,711.7 "/>
//          <polygon  data-name="Zafrabad" data-id="cns-371" id="_x33_71_2_" className="st1" points="778.8,710.6 773.8,700.9 773,710.3 764,715.7 766,719 776.3,720.3 779.7,735 774.3,738.9 792.7,738 789,711.7 "/>
//          <polygon  data-name="Mariyahu" data-id="cns-370" id="_x33_70_2_" className="st0" points="766,719 776.3,720.3 779.7,735 774.3,738.9 766.3,739.7 755,720.3 764,715.7 "/>
//          <polygon  data-name="Machhlishahr(SC)" data-id="cns-369" id="_x33_69_2_" className="st1" points="726,724 754,720.7 764,715.7 746.3,691 739.3,702.3 731.3,705.3 718.7,722.7 "/>
//          <polygon  data-name="Mungra Badshahpur" data-id="cns-368" id="_x33_68_2_" className="st0" points="696.7,725.7 702.7,713.7 700.7,703.7 716.7,696 731.3,705.3 714.7,728.3 697,731.7 "/>
//          <polygon  data-name="Malhani" data-id="cns-367" id="_x33_67_2_" className="st0" points="758.8,737.3 761.5,739.3 766.3,739.7 755,720.3 726,724 733,732.7 741.5,731.7 "/>
//          <polygon  data-name="Jaunpur" data-id="cns-366" id="_x33_66_2_" className="st1" points="768,684.3 774.3,697.3 773,710.3 764,715.7 750,696.7 746.3,691 764.3,672.3 "/>
//          <polygon  data-name="Shahganj" data-id="cns-365" id="_x33_65_2_" className="st0" points="751,658.7 733,667.3 740.7,680 746.3,691 764.3,672.3 "/>
//          <polygon  data-name="Badlapur" data-id="cns-364" id="_x33_64_2_" className="st1" points="739.3,702.3 746.3,691 740.7,680 730,682.3 721,689.3 716.7,696 731.3,705.3 "/>
//          <polygon  data-name="Bairia" data-id="cns-363" id="_x33_63_1_" className="st0" points="985,722.5 1001,714.5 998.5,706.8 982,697.3 974.3,696 971.5,705.5 971.8,715.5 972.3,720.3 "/>
//          <polygon  data-name="Bansdih" data-id="cns-362" id="_x33_62_1_" className="st0" points="956.5,687.5 943.5,684.3 934.8,696.5 937,703 971.5,705.5 974.3,696 971,689.5 "/>
//          <polygon  data-name="Ballia Nagar" data-id="cns-361" id="_x33_61_1_" className="st0" points="939,717.3 958,724 962.5,718 971.8,715.5 971.5,705.5 937,703 926.8,710.3 926,715.5 934.8,717 "/>
//          <polygon  data-name="Phephana" data-id="cns-360" id="_x33_60_1_" className="st0" points="934.8,717 916.3,714 915.7,726.3 912,739.7 915.8,739.1 918.8,734.5 922.9,734.7 931.1,733.3 936.3,733.1 936.3,728.8 934.1,726.1 933.7,722.7 "/>
//          <polygon  data-name="Sikanderpur" data-id="cns-359" id="_x33_59_1_" className="st0" points="935.3,671.3 915.5,667.3 914.5,684.5 915.8,693.3 926.3,694.5 934.8,696.5 943.5,684.3 941.8,677 "/>
//          <polygon  data-name="Rasara" data-id="cns-358" id="_x33_58_1_" className="st0" points="926.3,694.5 915.8,693.3 899.3,693 896.8,705.8 916.3,714 926,715.5 926.8,710.3 937,703 934.8,696.5 "/>
//          <polygon  data-name="Belthara Road(SC)" data-id="cns-357" id="_x33_57_1_" className="st0" points="895,669.8 883.5,675.5 900.8,687.5 899.3,693 915.8,693.3 914.5,684.5 915.5,667.3 "/>
//          <polygon  data-name="Mau" data-id="cns-356" id="_x33_56_1_" className="st0" points="896.8,705.8 880,695 882.3,682.8 883.5,675.5 900.8,687.5 899.3,693 "/>
//          <polygon  data-name="Muhammadabad Gohna(SC)" data-id="cns-355" id="_x33_55_1_" className="st0" points="821.3,699.7 813.8,703.3 813.5,713.3 808.7,722.7 821.3,723.3 825,712 833,712 849,703.7 857.8,703 857.5,702.5 840.8,693.8 "/>
//          <polygon  data-name="Ghosi" data-id="cns-354" id="_x33_54_1_" className="st0" points="841.5,674.5 838.8,683.3 840.8,693.8 858.3,703 863,699 867.7,699.7 880,695 881.3,689.5 861.5,681 849,672.5 "/>
//          <polygon  data-name="Madhuban" data-id="cns-353" id="_x33_53_3_" className="st0" points="861.5,681 881.3,689.5 883.5,675.5 869.2,656.3 "/>
//          <polygon  data-name="Mehnagar(SC)" data-id="cns-352" id="_x33_52_2_" className="st2" points="855.5,650.3 849,672.5 861.5,681 869.2,656.3 868.3,649.2 "/>
//          <polygon  data-name="Lalganj(SC)" data-id="cns-351" id="_x33_51_1_" className="st2" points="789.8,704.8 801.3,700.8 806.8,701.3 813.8,703.3 813.5,713.3 808.7,722.7 791,712 789,711.7 "/>
//          <polygon  data-name="Didarganj" data-id="cns-350" id="_x33_50_1_" className="st2" points="771.8,686.8 787.8,678.8 794,680.8 799.8,695 801.3,700.8 789.8,704.8 789,711.7 778.8,710.6 773.8,700.9 774.3,697.3 769.3,688 "/>
//          <polygon  data-name="Phoolpur - Pawai" data-id="cns-349" id="_x33_49_1_" className="st0" points="784.5,662.7 787.8,678.8 769.3,688 767.5,683.5 764.3,672.3 751,658.7 768.5,653.2 "/>
//          <polygon  data-name="Nizamabad" data-id="cns-348" id="_x33_48_1_" className="st1" points="810.5,661 815.5,671.3 814.3,677.7 802.7,681.5 794,680.8 787.8,678.8 784.5,662.7 794.8,662.3 808.3,657.5 "/>
//          <polygon  data-name="Azamgarh" data-id="cns-347" id="_x33_47_1_" className="st0" points="815.5,671.3 828.2,667.2 825.5,683.3 818.7,691.3 813.8,703.3 806.8,701.3 801.3,700.8 794,680.8 802.7,681.5 814.3,677.7 "/>
//          <polygon  data-name="Mubarakpur" data-id="cns-346" id="_x33_46_1_" className="st0" points="830.7,683.3 838.8,683.3 840.8,693.8 826.3,698 821.3,699.7 814.7,702.8 814.3,701.5 818.7,691.3 825.5,683.3 "/>
//          <polygon  data-name="Sagri" data-id="cns-345" id="_x33_45_1_" className="st1" points="840.2,651 851.5,651.2 855.5,650.3 849,672.5 841.5,674.5 838.8,683.3 825.5,683.3 828.2,667.2 833.3,665.5 833.8,651.7 "/>
//          <polygon  data-name="Gopalpur" data-id="cns-344" id="_x33_44_1_" className="st1" points="827.8,647 833.8,651.7 833.3,665.5 815.5,671.3 810.5,661 808.3,657.5 808,648 814.3,645.6 "/>
//          <polygon  data-name="Atrauliya" data-id="cns-343" id="_x33_43_1_" className="st0" points="808,648 796.5,635.2 790,634.3 784.2,637.3 785,657.5 784.5,662.7 794.8,662.3 808.3,657.5 "/>
//          <polygon  data-name="Barhaj" data-id="cns-342" id="_x33_42_1_" className="st0" points="875.2,641.7 868.3,649.2 869.2,656.3 883.5,675.5 895,669.8 897.5,669.4 895,657 894,653.8 880.5,639.3 "/>
//          <polygon  data-name="Salempur(SC)" data-id="cns-341" id="_x33_41_1_" className="st0" points="905,653 896.7,654.1 894,653.8 895,657 897.5,669.3 915.5,667.3 929.8,670.3 925,653.8 "/>
//          <polygon  data-name="Bhatpar Rani" data-id="cns-340" id="_x33_40_1_" className="st1" points="937.8,653 944.3,652.8 944.8,636.8 929,632.5 920.5,630.5 905,653 925,653.8 "/>
//          <polygon  data-name="Rampur Karkhana" data-id="cns-339" id="_x33_39_1_" className="st1" points="908,625.3 891.5,633.3 880.5,639.3 894,653.8 896.3,654.2 905,653 920.5,630.5 "/>
//          <polygon  data-name="Pathardeva" data-id="cns-338" id="_x33_38_2_" className="st1" points="912.7,622.5 919.8,621 928.2,617.8 914.8,603.3 894.7,612.5 882.8,621 868.8,622.2 872.2,625.2 880.5,639.3 908,625.3 "/>
//          <polygon  data-name="Deoria" data-id="cns-337" id="_x33_37_1_" className="st0" points="894.7,612.5 914.8,603.3 911.2,599 904.3,591.2 889.3,598.7 "/>
//          <polygon  data-name="Rudrapur" data-id="cns-336" id="_x33_36" className="st0" points="894.7,612.5 889.3,598.7 882.8,621 "/>
//          <polygon  data-name="Ramkola(SC)" data-id="cns-335" id="_x33_35" className="st2" points="889.3,598.7 879.8,604.2 868.8,622.2 882.8,621 "/>
//          <polygon  data-name="Hata" data-id="cns-334" id="_x33_34_1_" className="st2" points="885.7,581.8 891.3,563.7 921.3,568 917.7,568.7 909.5,572.8 899.7,581.3 904.3,591.2 889.3,598.7 "/>
//          <polygon  data-name="Kushinagar" data-id="cns-333" id="_x33_33_1_" className="st2" points="919.6,567.7 909.5,572.8 899.7,581.3 904.3,591.2 911.2,599 913,594 930.7,576 929.3,567.3 923.2,568.2 "/>
//          <polygon  data-name="Fazilnagar" data-id="cns-332" id="_x33_32_1_" className="st2" points="930.7,576 913,594 911.2,599 928.2,617.8 940,605.7 934.8,599.5 941.5,582 939.5,575 "/>
//          <polygon  data-name="Tamkuhi Raj" data-id="cns-331" id="_x33_31_1_" className="st2" points="940,605.7 958.2,610.3 970.2,608.6 972.5,607.8 973.6,605.3 971.8,600.3 954.8,580.3 948,577.5 941.5,582 934.8,599.5 "/>
//          <polygon  data-name="Padrauna" data-id="cns-330" id="_x33_30_1_" className="st2" points="927.8,559.5 917.5,547.8 898.7,546.7 888.3,557.3 891.3,563.7 923.2,568.2 929.3,567.3 "/>
//          <path data-name="Khadda" data-id="cns-329" id="_x33_29_1_" className="st0" d="M911.3,527.7c0.2-0.5,10.8,9.7,10.8,9.7l-4.7,10.5l-18.8-1.2l0.8-12.8l5.7-6.3L911.3,527.7z"/>
//          <polygon  data-name="Chillupar" data-id="cns-328" id="_x33_28_1_" className="st0" points="872.2,625.2 880.5,639.3 875.2,641.7 868.3,649.2 855.5,650.3 845,628.3 868.8,622.2 "/>
//          <polygon  data-name="Bansgaon(SC)" data-id="cns-327" id="_x33_27_1_" className="st0" points="879.8,604.2 868.8,622.2 845,628.3 840.2,620.8 859.7,613.8 866.7,598.7 876.8,596.7 "/>
//          <polygon  data-name="Chauri - Chaura" data-id="cns-326" id="_x33_26_1_" className="st0" points="885.7,581.8 891.3,563.7 884.2,565.2 879,566.2 868.2,572 867.2,574.7 867.5,581 876.8,596.7 879.8,604.2 889.3,598.7 "/>
//          <polygon  data-name="Khajani(SC)" data-id="cns-325" id="_x33_25_1_" className="st0" points="821.5,623.7 814.5,608.5 818.3,604.8 826.3,603 836.8,607.3 836.3,617 840.2,620.8 845,628.3 855.5,650.3 851.5,651.2 833.8,651.7 827.8,647 814.2,646.2 815.7,633.8 "/>
//          <polygon  data-name="Sahajanwa" data-id="cns-324" id="_x33_24_1_" className="st0" points="826.7,569.7 828,560.2 829.3,553.8 842,557.7 840.2,572.7 840.2,587.3 833.3,606 826.3,603 818.3,604.8 811,598.5 814.3,582.3 817.5,574.7 827.3,573.8 "/>
//          <polygon  data-name="Gorakhpur Rural" data-id="cns-323" id="_x33_23_1_" className="st0" points="840.2,620.8 859.7,613.8 866.7,598.7 860,591.5 851.7,590.5 850,584 840.2,587.3 833.3,606 836.8,607.3 836.3,617 "/>
//          <polygon  data-name="Gorakhpur Urban" data-id="cns-322" id="_x33_22_1_" className="st0" points="860,591.5 860.4,591.9 866.7,598.7 876.8,596.7 867.5,581 854.7,582.3 850,584 851.7,590.5 "/>
//          <polygon  data-name="Pipraich" data-id="cns-321" id="_x33_21_1_" className="st2" points="854.7,582.3 867.5,581 867.2,574.7 860,574.3 855.5,566.8 840.8,566.8 840.2,572.7 840.2,587.3 "/>
//          <polygon  data-name="Caimpiyarganj" data-id="cns-320" id="_x33_20_1_" className="st2" points="849.5,553 852.7,546.7 853.3,540.3 820.2,542 819.3,542.2 816,548.5 817.3,559.2 828,560.2 829.3,553.8 842,557.7 "/>
//          <polygon  data-name="Paniyra" data-id="cns-319" id="_x33_19_1_" className="st2" points="868.2,572 879,566.2 891.3,563.7 888.3,557.3 875,553.8 863.7,551 864.8,539 856.5,539.5 853.3,540.3 852.7,546.7 849.5,553 842,557.7 840.8,566.8 855.5,566.8 860,574.3 867.2,574.7 "/>
//          <polygon  data-name="Maharajganj(SC)" data-id="cns-318" id="_x33_18_1_" className="st2" points="872.5,531.3 864.8,539 863.7,551 888.3,557.3 898.7,546.7 899.5,533.8 884.1,527.9 878.1,525.9 "/>
//          <polygon  data-name="Siswa" data-id="cns-317" id="_x33_17_1_" className="st0" points="890.7,510.7 906,517.5 905.2,527.5 899.5,533.8 869.7,522.3 880.5,515.8 887.5,509.3 "/>
//          <polygon  data-name="Nautanwa" data-id="cns-316" id="_x33_16_1_" className="st0" points="880.5,515.8 887.5,509.3 878,504 848.5,502 844.3,520.3 863.5,526.5 "/>
//          <polygon  data-name="Pharenda" data-id="cns-315" id="_x33_15_1_" className="st0" points="856.5,539.5 864.8,539 878,525.8 870,522.5 863.5,526.5 844.3,520.3 834.8,520 820.2,533.8 819.3,542.2 853.3,540.3 "/>
//          <polygon  data-name="Dhanghata(SC)" data-id="cns-314" id="_x33_14_1_" className="st0" points="786,620.3 777.8,609 798.3,598.7 811,598.5 818.3,604.8 814.5,608.5 804.3,613.8 "/>
//          <polygon  data-name="Khalilabad" data-id="cns-313" id="_x33_13_1_" className="st0" points="794.5,592.5 792.7,574.5 810.3,576 817.5,574.7 814.3,582.3 811,598.5 798.3,598.7 "/>
//          <polygon  data-name="Menhdawal" data-id="cns-312" id="_x33_12_1_" className="st0" points="762.7,615.8 780.2,612.3 777.8,609 771.3,585.8 772.5,574.8 756.7,572 754.3,588 754.7,616.3 "/>
//          <path data-name="Mahadewa(SC)" data-id="cns-311" id="_x33_11_1_" className="st0" d="M732.2,596.7L718,608.3l14.7,12.3c0,0,21.5-3.5,22-4.3c0.5-0.8-0.3-28.3-0.3-28.3l-20.2,4.7L732.2,596.7z"/>
//          <polygon  data-name="Basti Sadar" data-id="cns-310" id="_x33_10_1_" className="st0" points="753.5,560.8 742.5,569.7 708.3,577.8 724.8,602.7 732.2,596.7 734.2,592.7 754.3,588 756.7,572 "/>
//          <polygon  data-name="Rudhauli" data-id="cns-309" id="_x33_09_1_" className="st0" points="771.3,585.8 777.8,609 798.3,598.7 794.5,592.5 792.7,574.5 "/>
//          <polygon  data-name="Kaptanganj" data-id="cns-308" id="_x33_08_1_" className="st0" points="756.7,572 772.5,574.8 775,541 767.8,546 758.2,545 753.5,560.8 "/>
//          <polygon  data-name="Harraiya" data-id="cns-307" id="_x33_07_1_" className="st0" points="742.5,569.7 753.5,560.8 756.8,549.8 758.2,545 743.8,544.5 731.3,536.8 716.5,533.2 710,541.7 712.7,551.2 728,550.7 740.8,558.5 "/>
//          <polygon  data-name="Domariyaganj" data-id="cns-306" id="_x33_06_2_" className="st0" points="776,524.7 771.7,586 793.3,574.3 787.8,561 807.2,535.3 799.8,525.2 795.3,514.7 "/>
//          <polygon  data-name="Itwa" data-id="cns-305" id="_x33_05_1_" className="st0" points="737.8,520.8 731.3,536.8 743.8,544.5 767.8,546 775,541 776,524.7 754,518.8 754.5,511.5 737.5,517.8 "/>
//          <polygon  data-name="Bansi" data-id="cns-304" id="_x33_04_1_" className="st0" points="787.5,561.7 806.7,535.7 816,548.5 817.3,559.2 828,560.2 826.7,569.7 827.3,573.8 817.5,574.7 810.3,576 792.7,574.5 "/>
//          <polygon  data-name="Kapilvastu(SC)" data-id="cns-303" id="_x33_03_1_" className="st0" points="822.7,505.2 804,506 794.8,515 799.3,525.5 816,548.5 819.3,542.2 820.2,533.8 834.8,520 828.7,510.3 "/>
//          <path data-name="Shohratgarh" data-id="cns-302" id="_x33_02_1_" className="st0" d="M794.8,515l-19.3,10l-21.5-6.2l0.5-7.3l14.2-12.7c0,0,22.2,1.5,22.7,1.3c0.5-0.2,12.7,5.8,12.7,5.8L794.8,515z"/>
//          <polygon  data-name="Gaura" data-id="cns-301" id="_x33_01_1_" className="st0" points="712.7,551.2 728,550.7 740.8,558.5 742.5,569.7 716.8,576 708.3,577.8 706.5,555.5 "/>
//          <polygon  data-name="Mankapur(SC)" data-id="cns-300" id="_x33_00_1_" className="st0" points="706.5,555.5 708.3,577.8 724.8,602.7 718,608.3 709.2,599.5 689.5,599.5 684.5,584.8 677,587 681,557 692,562.3 "/>
//          <polygon  data-name="Tarabganj" data-id="cns-299" id="_x32_99_1_" className="st0" points="658.7,543.8 674.2,550.8 681,557 677.5,582.9 677,587 675.1,587.2 646.8,577.5 645,565 "/>
//          <polygon  data-name="Colonelganj" data-id="cns-298" id="_x32_98_1_" className="st2" points="640.8,532 658.7,543.8 645,565 618,552.5 639.2,531 "/>
//          <polygon  data-name="Katra Bazar" data-id="cns-297" id="_x32_97_1_" className="st2" points="667.7,521.7 652,518 640.8,525.2 642,528.3 639.2,531 658.7,543.8 674.2,550.8 681,557 686.5,542.2 677.3,541.5 "/>
//          <polygon  data-name="Gonda" data-id="cns-296" id="_x32_96_1_" className="st0" points="706.5,555.5 712.7,551.2 710,541.7 696.8,542.7 686.5,542.2 681,557 692,562.3 "/>
//          <polygon  data-name="Mehnaun" data-id="cns-295" id="_x32_95_1_" className="st0" points="694,516 686.2,510.7 672.8,509.2 667.7,521.7 677.3,541.5 696.8,542.7 710,541.7 716.5,533.2 "/>
//          <polygon  data-name="Balrampur(SC)" data-id="cns-294" id="_x32_94_1_" className="st0" points="727,507.5 726,506 723.3,503.7 703.8,491.3 694,516 702.8,522.7 705.5,524.5 727.3,507.2 "/>
//          <polygon  data-name="Utraula" data-id="cns-293" id="_x32_93_1_" className="st2" points="716.5,533.2 731.3,536.8 737.8,520.8 737.5,517.8 727,507.5 705.5,524.5 "/>
//          <polygon  data-name="Gainsari" data-id="cns-292" id="_x32_92_1_" className="st2" points="768.7,498.8 766.5,476.8 764.5,472 734,477.5 723.3,503.7 737.5,517.8 754.5,511.5 "/>
//          <polygon  data-name="Tulsipur" data-id="cns-291" id="_x32_91_1_" className="st2" points="722.2,502.7 697,486.8 692.8,475.5 703.5,458.5 734,477.5 723.3,503.7 "/>
//          <polygon  data-name="Shrawasti" data-id="cns-290" id="_x32_90_1_" className="st2" points="672.8,509.2 686.2,510.7 694,516 703.8,491.3 697,486.8 692.8,475.5 689.2,482.8 678.7,486.8 660.7,479.3 651.8,494.8 650.7,498.3 663.7,504.5 667.7,521.7 "/>
//          <polygon  data-name="Bhinga" data-id="cns-289" id="_x32_89_1_" className="st0" points="703.5,458.5 686.2,450.2 676.2,449.5 668.2,457.3 660.5,454.2 652.7,463 647.7,470.3 660.7,479.3 678.7,486.8 689.2,482.8 692.8,475.5 "/>
//          <polygon  data-name="Kaiserganj" data-id="cns-288" id="_x32_88_1_" className="st0" points="624.8,501.5 638.7,518 642,528.3 618,552.5 610.3,535.5 609,520 608.8,518.3 602.5,510.8 622.5,497.3 "/>
//          <polygon  data-name="Payagpur" data-id="cns-287" id="_x32_87_1_" className="st0" points="633.7,511.7 650.7,498.3 663.7,504.5 667.7,521.7 652,518 640.8,525.2 638.7,518 "/>
//          <polygon  data-name="Bahraich" data-id="cns-286" id="_x32_86_1_" className="st0" points="651.8,494.8 660.7,479.3 647.7,470.3 639.3,483.7 628.2,493.5 622.5,497.3 624.8,501.5 633.7,511.7 650.7,498.3 "/>
//          <polygon  data-name="Mahasi" data-id="cns-285" id="_x32_85_1_" className="st0" points="612.3,464.3 639.3,483.7 628.2,493.5 602.5,510.8 594.8,500.3 590.5,480 591.8,469 "/>
//          <polygon  data-name="Matera" data-id="cns-284" id="_x32_84_1_" className="st1" points="639.3,483.7 652.7,463 660.5,454.2 644.5,442 635.5,440.5 623.3,454 612.3,464.3 "/>
//          <polygon  data-name="Nanpara" data-id="cns-283" id="_x32_83_1_" className="st0" points="635.5,440.5 623.3,454 612.3,464.3 591.8,469 592.5,464.3 590,448.5 616.8,435 615.2,428.8 "/>
//          <polygon  data-name="Balha(SC)" data-id="cns-282" id="_x32_82_1_" className="st1" points="616.8,435 613.5,422 585.8,397 561.8,386.5 573,420.5 590,448.5 "/>
//          <polygon  data-name="Akbarpur" data-id="cns-281" id="_x32_81_1_" className="st0" points="780.2,612.3 762.7,615.8 754.7,616.3 732.7,620.7 744.8,647.3 769.7,642.5 769.7,625 786,620.3 "/>
//          <polygon  data-name="Jalalpur" data-id="cns-280" id="_x32_80_1_" className="st0" points="769.7,642.5 769.7,625 785.5,620.5 804.5,628.2 815.7,633.8 814.3,645.6 808,648 796.5,635.2 790,634.3 784.2,637.3 784.5,646 "/>
//          <polygon  data-name="Alapur(SC)" data-id="cns-279" id="_x32_79_1_" className="st0" points="785.5,620.5 804.3,613.8 814.5,608.5 821.5,623.7 815.7,633.8 805.1,628.3 "/>
//          <polygon  data-name="Tanda" data-id="cns-278" id="_x32_78_1_" className="st0" points="705.8,618.2 718,608.3 732.7,620.7 744.8,647.3 726.3,660.8 714.8,633.3 "/>
//          <polygon  data-name="Katehari" data-id="cns-277" id="_x32_77_1_" className="st0" points="697.2,650 714.8,633.3 705.8,618.2 692,624.8 672,638 669.3,645.8 675.7,652.7 "/>
//          <polygon  data-name="Goshainganj" data-id="cns-276" id="_x32_76_1_" className="st0" points="709.2,599.5 689.5,599.5 685.7,607.2 692.5,624.5 705.8,618.2 718,608.3 "/>
//          <polygon  data-name="Ayodhya" data-id="cns-275" id="_x32_75_1_" className="st1" points="689.5,599.5 684.5,584.8 676.3,587.2 661.8,590.5 650.5,593.5 644.2,616 673.2,621.5 685.7,607.2 "/>
//          <polygon  data-name="Bikapur" data-id="cns-274" id="_x32_74_1_" className="st0" points="675.7,587.4 646.8,577.5 629.3,580.5 627,590.5 650.5,593.5 "/>
//          <polygon  data-name="Milkipur(SC)" data-id="cns-273" id="_x32_73_1_" className="st1" points="642.7,620.8 648.8,599.7 650.5,593.5 627,590.5 625.3,609.8 621,618.3 627,629.2 "/>
//          <polygon  data-name="Haidergarh(SC)" data-id="cns-272" id="_x32_72_2_" className="st0" points="581.3,595 606.3,580.8 627,590.5 625.3,610.5 621,618.3 600.8,616 579.5,610.3 576.8,603 "/>
//          <polygon  data-name="Rudauli" data-id="cns-271" id="_x32_71_1_" className="st0" points="622,640.5 627,629.2 621,618.3 600.8,616 606.5,641 600.5,648.5 603,657.5 631.3,656.8 "/>
//          <polygon  data-name="Dariyabad" data-id="cns-270" id="_x32_70_1_" className="st0" points="629.3,580.5 646.8,577.5 645,565 618,552.5 601.5,572.5 606.3,580.8 627,590.5 "/>
//          <polygon  data-name="Zaidpur(SC)" data-id="cns-269" id="_x32_69_1_" className="st1" points="570.3,563 566.3,574.5 569.3,581 554.8,593 576.8,603 581.3,595 606.3,580.8 601.5,572.5 574.5,563.5 "/>
//          <polygon  data-name="Barabanki" data-id="cns-268" id="_x32_68_1_" className="st0" points="542.5,579.5 522.8,585 519.3,591.8 520.3,602 542,608.8 543,602.3 554.8,593 569.3,581 566.3,574.5 "/>
//          <polygon  data-name="Ram Nagar" data-id="cns-267" id="_x32_67_1_" className="st0" points="604.5,521 590,535.5 590.5,548.3 600,562.8 601.5,572.5 618,552.5 610.3,535.5 609,520 "/>
//          <polygon  data-name="Kursi" data-id="cns-266" id="_x32_66_1_" className="st0" points="574.5,563.5 601.5,572.5 600,562.8 590.5,548.3 590,535.5 580.5,531.5 570.3,563 "/>
//          <polygon  data-name="Koraon(SC)" data-id="cns-265" id="_x32_65_1_" className="st0" points="664.5,805 645.8,798.8 656.5,786.3 673,782.3 697,790.3 709,808.7 688.7,826.7 673.3,826.3 664.8,817.3 "/>
//          <polygon  data-name="Bara(SC)" data-id="cns-264" id="_x32_64_1_" className="st2" points="642.8,761 624.8,764.8 621.5,772 621.5,782 640,796.5 645.8,798.8 656.5,786.3 673,782.3 663.8,763.5 "/>
//          <polygon  data-name="Allahabad South" data-id="cns-263" id="_x32_63_1_" className="st0" points="673.3,782.3 680.7,765 686.5,753.8 685.3,752.7 668.7,765 663.8,763.5 673,782.3 "/>
//          <polygon  data-name="Allahabad North" data-id="cns-262" id="_x32_62_1_" className="st2" points="668.7,765 685.3,752.7 682.7,750.3 659.7,753 654.3,755.7 642.8,761 663.8,763.5 "/>
//          <polygon  data-name="Allahabad West" data-id="cns-261" id="_x32_61_1_" className="st2" points="659.7,753 682.7,750.3 670,738.7 662,739.3 654.3,755.7 "/>
//          <polygon  data-name="Karachhana" data-id="cns-260" id="_x32_60_1_" className="st0" points="691.3,762.5 681.5,763.5 673,782.3 697,790.3 700.3,771 704.8,769.9 705,769.5 "/>
//          <polygon  data-name="Meja" data-id="cns-259" id="_x32_59_1_" className="st0" points="700.3,771 697,790.3 709,808.7 714,802.5 717.3,797.2 717.7,791.2 712.8,779.9 705.5,769.8 "/>
//          <polygon  data-name="Handia" data-id="cns-258" id="_x32_58_1_" className="st0" points="686.5,753.8 714.5,745.8 721,752.3 720,759.5 714,766 705.5,769.8 691.3,762.5 681.5,763.5 "/>
//          <polygon  data-name="Pratappur" data-id="cns-257" id="_x32_57_1_" className="st1" points="714.5,745.8 717.3,739.7 701,733 697,731.7 690.8,735.3 686.5,753.8 "/>
//          <polygon  data-name="Phulpur" data-id="cns-256" id="_x32_56_1_" className="st2" points="670,738.7 686.5,753.8 690.8,735.3 669,736.7 661,736 662,739.3 "/>
//          <polygon  data-name="Soraon(SC)" data-id="cns-255" id="_x32_55_1_" className="st0" points="669,736.7 690.8,735.3 670.3,716.3 661,736 "/>
//          <polygon  data-name="Phaphamau" data-id="cns-254" id="_x32_54_1_" className="st2" points="662,739.3 654.3,755.7 642.8,761 639,751 634.7,735.7 632.3,729.7 638.3,726.3 661,736 "/>
//          <polygon  data-name="Chail" data-id="cns-253" id="_x32_53_1_" className="st2" points="634.7,734.3 639.7,753 642.8,761 624.8,764.8 621.5,772 617.8,770.5 622.8,748.3 612.8,740 632.3,729.7 "/>
//          <polygon  data-name="Manjhanpur(SC)" data-id="cns-252" id="_x32_52_2_" className="st0" points="590.8,740.3 605.3,770 587.2,761.8 572.8,755.3 579.8,747.3 "/>
//          <polygon  data-name="Sirathu" data-id="cns-251" id="_x32_51_1_" className="st0" points="590.8,740.3 612.8,740 622.8,748.3 617.8,770.5 605.3,770 "/>
//          <polygon  data-name="Raniganj" data-id="cns-250" id="_x32_50_1_" className="st0" points="684,701.8 673,708.5 670.3,716.3 690.8,735.3 697,731.7 696.7,725.7 702.7,713.7 689.5,701.8 "/>
//          <path data-name="Patti" data-id="cns-249" id="_x32_49_1_" className="st0" d="M718,679l-19.8-2l-11.8-2.8c0,0-4,5.8-4,7.8s0.3,9.5,0.3,9.5l6.8,10.3l12.8,11.6l0.1-0.8l-1.8-8.9l16-7.7l4.3-6.7l9-7L718,679z"/>
//          <polygon  data-name="Pratapgarh" data-id="cns-248" id="_x32_48_1_" className="st0" points="675.3,674 659.8,676.8 646,673.3 649.5,703 684,701.8 689.5,701.8 682.8,691.5 682.5,682 686.5,674.3 "/>
//          <polygon  data-name="Vishwanath Ganj" data-id="cns-247" id="_x32_47_1_" className="st0" points="684,701.8 673,708.5 670.3,716.3 661,736 638.3,726.3 639,712.5 650,709 649.5,703 "/>
//          <polygon  data-name="Kunda" data-id="cns-246" id="_x32_46_1_" className="st0" points="612.8,740 638.3,726.3 639,712.5 615.9,707.7 614.3,711.3 "/>
//          <polygon  data-name="Babaganj(SC)" data-id="cns-245" id="_x32_45_1_" className="st0" points="614.3,711.3 612.8,740 590.8,740.3 597,727.3 605,705.5 615.9,707.7 "/>
//          <polygon  data-name="Rampur Khas" data-id="cns-244" id="_x32_44_1_" className="st0" points="646,673.3 649.5,701.5 650,709 639,712.5 605,705.5 595.8,702.3 598.3,699.3 608.8,693.5 628.3,686.8 623.3,671.8 631.8,661.5 "/>
//          <polygon  data-name="Khaga(SC)" data-id="cns-243" id="_x32_43_1_" className="st0" points="601.3,703.8 595.8,702.3 593,711 576.8,716.3 561.5,738.5 579.8,747.3 590.8,740.3 596.3,729.5 605,705.5 "/>
//          <polygon  data-name="Husainganj" data-id="cns-242" id="_x32_42_1_" className="st0" points="593,711 576.8,716.3 559.5,741.8 552.8,731 550.7,729.7 559.3,714.7 565,695 563,688 564.3,683.3 584.8,692.3 595.7,701.7 "/>
//          <polygon  data-name="Ayah Shah" data-id="cns-241" id="_x32_41_1_" className="st1" points="552.8,731 541.3,721.5 526.3,720.8 518.3,721 496,744.5 519.5,757.8 538.8,759.8 559.5,741.8 "/>
//          <polygon  data-name="Fatehpur" data-id="cns-240" id="_x32_40_1_" className="st1" points="563,688 565,695 559.3,714.7 550.7,729.7 541.3,721.5 526.3,720.8 537.3,681.3 539,676.5 547.8,675.8 564.3,683.3 "/>
//          <polygon  data-name="Bindki" data-id="cns-239" id="_x32_39_1_" className="st0" points="519.3,664.3 537.3,681.3 532.5,700.8 526.3,720.8 518.3,721 504.5,717.5 501.8,699.3 513.8,668.5 "/>
//          <polygon  data-name="Jahanabad" data-id="cns-238" id="_x32_38_1_" className="st0" points="512,665.8 502.3,652.5 470,672.3 460,688 476,697.5 485.5,694.8 501.8,699.3 513.8,668.5 "/>
//          <polygon  data-name="Manikpur" data-id="cns-237" id="_x32_37_2_" className="st0" points="603.5,788.3 618.3,794 621.5,782 621.5,772 617.8,770.5 605.3,770 572.8,755.3 558.5,777 544.5,787 532.5,814.5 552,811.5 575.8,816.5 587.5,787.8 "/>
//          <polygon  data-name="Chitrakoot" data-id="cns-236" id="_x32_36_1_" className="st1" points="579.8,747.3 561.5,738.5 559.5,741.8 538.8,759.8 519.8,776.5 523.3,794.5 544.5,787 558.5,777 572.8,755.3 "/>
//          <polygon  data-name="Banda" data-id="cns-235" id="_x32_35_1_" className="st1" points="472,759.8 481,773 519.5,757.8 496,744.5 480.8,750.5 463.5,755.8 "/>
//          <polygon  data-name="Naraini(SC)" data-id="cns-234" id="_x32_34_1_" className="st1" points="523.3,794.5 494.8,801.8 469.5,803.5 481,773 511,761 519.5,757.8 538.8,759.8 519.8,776.5 "/>
//          <polygon  data-name="Baberu" data-id="cns-233" id="_x32_33" className="st1" points="496,744.5 480.8,750.5 463.5,755.8 459,738.8 475.8,721 "/>
//          <polygon  data-name="Tindwari" data-id="cns-232" id="_x32_32_2_" className="st1" points="504.5,717.5 518.3,721 496,744.5 475.8,721 471.3,704.5 476,697.5 485.5,694.8 501.8,699.3 "/>
//          <polygon  data-name="Charkhari" data-id="cns-231" id="_x32_31_1_" className="st1" points="369.5,744 399,736.8 436.5,761.8 436.5,765.8 422.5,773 414.8,786.8 413,793.8 380,784.5 367.5,796.3 356.3,790.8 361.8,774 350.3,764.5 350.3,759 349.5,753 352.8,753.3 361,740.8 "/>
//          <polygon  data-name="Mahoba" data-id="cns-230" id="_x32_30_1_" className="st1" points="459,738.8 463.5,755.8 444,764.5 436.5,761.8 399,736.8 398.8,732.5 427.8,726 "/>
//          <polygon  data-name="Rath(SC)" data-id="cns-229" id="_x32_29_1_" className="st0" points="427.8,706.5 435.3,718.5 427.8,726 398.8,732.5 399,736.8 369.5,744 361,740.8 357,710 370.5,706.3 389,693.5 415.5,697.5 "/>
//          <polygon  data-name="Hamirpur" data-id="cns-228" id="_x32_28_1_" className="st0" points="446,679 476,697.5 471.3,704.5 475.8,721 459,738.8 427.8,726 435.3,718.5 427.8,706.5 415.5,697.5 427.8,673.8 "/>
//          <polygon  data-name="Mehroni(SC)" data-id="cns-227" id="_x32_27_1_" className="st0" points="276.3,820.5 248.3,835.5 218.3,861.8 232.3,879.5 236,893.8 258,881.8 288,904.3 314.5,874.8 300.5,853 281.8,847 285,823.3 "/>
//          <polygon  data-name="Lalitpur" data-id="cns-226" id="_x32_26_1_" className="st0" points="257.8,779.3 230.8,793.5 229.8,804.8 210,822.3 218.3,861.8 248.3,835.5 276.3,820.5 268.8,805.3 "/>
//          <polygon  data-name="Garautha" data-id="cns-225" id="_x32_25_1_" className="st0" points="357,710 332.3,704.8 319.8,692.3 303.5,689.3 280.5,713 290.8,726.8 306,733.3 324.3,723.8 349.5,753 352.8,753.3 361,740.8 "/>
//          <path data-name="Mauranipur(SC)" data-id="cns-224" id="_x32_24_1_" className="st0" d="M324.3,723.8l25.3,29.3l0.8,6l-1.8,29.8l-24.3,0.8c0,0-20.8-19.3-20.5-20.3s-2.5-21.5-2.5-21.5l5.5-3.3l-0.8-11.3L324.3,723.8z"/>
//          <polygon  data-name="Jhansi Nagar" data-id="cns-223" id="_x32_23_1_" className="st2" points="290.8,726.8 306,733.3 306.8,744.5 280,762 268,754.8 252.5,735.8 279.3,731.5 "/>
//          <polygon  data-name="Babina" data-id="cns-222" id="_x32_22_1_" className="st2" points="268,754.8 255,764.8 251.8,769.8 259.3,774.3 257.8,779.3 244.5,786.3 226.3,760.5 241,737.8 252.5,735.8 "/>
//          <polygon  data-name="Orai(SC)" data-id="cns-221" id="_x32_21_1_" className="st1" points="370.5,706.3 389,693.5 349.3,661.8 345.8,660 343,666 344.5,686.8 332.3,704.8 357,710 "/>
//          <polygon  data-name="Kalpi" data-id="cns-220" id="_x32_20_1_" className="st1" points="427.8,673.8 415.5,697.5 389,693.5 349.3,661.8 345.8,660 362,631.5 370,630.5 395,657 "/>
//          <polygon  data-name="Madhaugarh" data-id="cns-219" id="_x32_19_1_" className="st1" points="362,631.5 343,666 344.5,686.8 332.3,704.8 319.8,692.3 303.5,689.3 309.8,670.3 306,665 327,628 "/>
//          <polygon  data-name="Ghatampur(SC)" data-id="cns-218" id="_x32_18_1_" className="st1" points="478.5,660.5 468.8,639.3 454.5,641 430.3,664.3 427.8,673.8 446,679 460,688 470,672.3 480.8,666 "/>
//          <polygon  data-name="Maharajpur" data-id="cns-217" id="_x32_17_1_" className="st0" points="495.5,612.5 517.8,618.3 514.5,626.8 516.3,632.8 536,642.3 536,657.3 527,658.8 513.8,668.5 502.3,652.5 502,647.5 503,638.8 496.8,638.8 488,634 "/>
//          <polygon  data-name="Kanpur Cantt" data-id="cns-216" id="_x32_16_1_" className="st0" points="463,618.3 471,616.3 487,619.5 488,634 488,634 477.3,629.8 460.5,622 "/>
//          <polygon  data-name="Kidwai Nagar" data-id="cns-215" id="_x32_15_1_" className="st0" points="452,632 454.5,641 468.8,639.3 477.3,629.8 460.5,622 "/>
//          <polygon  data-name="Arya Nagar" data-id="cns-214" id="_x32_14_1_" className="st0" points="433.8,599.8 434.3,607 451.8,615.8 460.5,602.3 468.6,593.9 468.4,593.2 "/>
//          <polygon  data-name="Sishamau" data-id="cns-213" id="_x32_13_1_" className="st0" points="434.3,607 424,623.3 439.5,632.5 440,622.8 451.8,615.8 "/>
//          <polygon  data-name="Govindnagar" data-id="cns-212" id="_x32_12_1_" className="st0" points="460.5,602.3 451.8,615.8 460.5,622 463,618.3 479.5,608.3 473.3,598.3 469.5,593 "/>
//          <polygon  data-name="Kalyanpur" data-id="cns-211" id="_x32_11_1_" className="st0" points="451.8,615.8 440,622.8 439.5,632.5 454.5,641 452,632 460.5,622 "/>
//          <polygon  data-name="Bithoor" data-id="cns-210" id="_x32_10_1_" className="st0" points="488,634 496.8,638.8 503,638.8 502,647.5 502.3,652.5 480.8,666 468.8,639.3 477.3,629.8 "/>
//          <polygon  data-name="Bilhaur(SC)" data-id="cns-209" id="_x32_09_1_" className="st2" points="396.3,544.3 406.3,554.5 422.5,543.5 437.8,525.8 429,520.8 424.5,515 401,521.3 400,527 394.7,539 "/>
//          <polygon  data-name="Bhognipur" data-id="cns-208" id="_x32_08_1_" className="st2" points="454.5,641 424,623.3 413.3,632.3 395,657 427.8,673.8 430.3,664.3 "/>
//          <polygon  data-name="Sikandra" data-id="cns-207" id="_x32_07_1_" className="st2" points="424,623.3 422,610.5 401.3,588.3 390,609.5 379.3,632.8 375.8,637.3 395,657 413.3,632.3 "/>
//          <polygon  data-name="Akbarpur - Raniya" data-id="cns-206" id="_x32_06_1_" className="st0" points="410.3,584.3 401.3,588.3 422,610.5 424,623.3 434.3,607 433.8,599.8 422.3,585.5 "/>
//          <polygon  data-name="Rasulabad(SC)" data-id="cns-205" id="_x32_05_1_" className="st0" points="408.3,568.8 388.8,565.5 380.5,576.3 391.3,574 401.3,588.3 410.3,584.3 422.3,585.5 433.3,564.3 422.5,543.5 "/>
//          <polygon  data-name="Auraiya(SC)" data-id="cns-204" id="_x32_04_1_" className="st2" points="379.3,632.8 390,609.5 401.3,588.3 391.3,574 380.5,576.3 355,567 349,599.7 341.3,617.3 342,629.7 361,631.8 370,630.5 375.8,637.3 "/>
//          <polygon  data-name="Dibiyapur" data-id="cns-203" id="_x32_03_1_" className="st2" points="322.3,591.3 348.5,585.8 351.7,585.1 349,599.7 341.3,617.3 327.8,600 "/>
//          <polygon  data-name="Bidhuna" data-id="cns-202" id="_x32_02_1_" className="st2" points="313.3,577.5 322.3,591.3 352,585 355,567 329.3,561.3 316.7,566 "/>
//          <path data-name="Bharthana(SC)" data-id="cns-201" id="_x32_01_1_" className="st2" d="M342,629.7l-0.3-9.2l-0.4-3.2L327.8,600l-5.4-8.7l-3.7-6.1c0,0-6-9.9-6-7.6c0,2.3-0.3,14.7-1,16.7c-0.7,2-3.3,16-3.3,16l13.3,16l5.3,1.7L342,629.7z"/>
//          <polygon  data-name="Etawah" data-id="cns-200" id="_x32_00_1_" className="st0" points="293.3,583.8 280.7,571 285,589 308.3,610.3 312.3,590.8 312.7,577.7 312.5,577.8 306.5,577.8 "/>
//          <polygon  data-name="Jaswantnagar" data-id="cns-199" id="_x31_99_1_" className="st0" points="316.7,566 313.3,577.5 306.5,577.8 293.3,583.8 280.7,571 288,566.3 306.8,562.8 "/>
//          <polygon  data-name="Kannauj(SC)" data-id="cns-198" id="_x31_98_1_" className="st0" points="408.3,568.8 422.5,543.5 406.3,554.5 396.3,544.3 388.3,551.3 393.3,562.5 388.8,565.5 "/>
//          <polygon  data-name="Tirwa" data-id="cns-197" id="_x31_97_1_" className="st0" points="389.8,554 393.3,562.5 388.8,565.5 380.5,576.3 372.3,573.5 379,556.3 375,547.8 388.3,551.3 "/>
//          <polygon  data-name="Chhibramau" data-id="cns-196" id="_x31_96_1_" className="st0" points="379,556.3 372.3,573.5 355,567 359,563 365,552.5 375,547.8 "/>
//          <polygon  data-name="Bhojpur" data-id="cns-195" id="_x31_95_1_" className="st0" points="375,547.8 388.3,551.3 396.3,544.3 394.8,538.3 371,537.3 360.8,545.5 365,552.5 "/>
//          <polygon  data-name="Farrukhabad" data-id="cns-194" id="_x31_94_1_" className="st0" points="400,527 394.7,539 371,537.3 361.7,516 390,524.7 401,521.3 "/>
//          <path data-name="Amritpur" data-id="cns-193" id="_x31_93_1_" className="st0" d="M391.7,492.7l10.7,13l-1.3,15.7c0,0-9,3.3-11,3.3s-28.3-8.7-28.3-8.7l9-15.7l15-8L391.7,492.7z"/>
//          <polygon  data-name="Kaimganj(SC)" data-id="cns-192" id="_x31_92_1_" className="st0" points="333,476 371.7,487.7 385.7,492.3 370.7,500.3 352.7,532.7 343.3,521.3 333.3,491.7 326.7,477.3 "/>
//          <polygon  data-name="Kadipur(SC)" data-id="cns-191" id="_x31_91_1_" className="st0" points="742.5,647.7 769.7,642.5 784.5,646 785.2,656 784.5,662.7 768.5,653.2 751,658.7 751.5,650.7 "/>
//          <polygon  data-name="Lambhua" data-id="cns-190" id="_x31_90_1_" className="st0" points="726.3,660.8 743.3,647.8 751.5,650.7 751,658.7 733,667.3 740.7,680 730,682.3 717.7,679 715.8,662.3 "/>
//          <polygon  data-name="Sadar" data-id="cns-189" id="_x31_89_1_" className="st0" points="714.8,633.3 726.3,660.8 715.8,662.3 699.8,659.3 679.8,661 675.2,661.5 675.2,652.5 697.2,650 "/>
//          <polygon  data-name="Sultanpur" data-id="cns-188" id="_x31_88_1_" className="st0" points="673.2,621.5 685.7,607.2 692.5,624.5 672,638 669.3,645.8 664,639.8 "/>
//          <polygon  data-name="Isauli" data-id="cns-187" id="_x31_87_1_" className="st0" points="644.2,616 667.2,620.3 673.2,621.5 664,639.8 656.3,630.2 642.7,620.8 "/>
//          <polygon  data-name="Amethi" data-id="cns-186" id="_x31_86_1_" className="st0" points="679.8,661 699.8,659.3 715.8,662.3 717.7,679 705.2,678 698.3,677 686.5,674.3 675.3,674 675.2,661.5 "/>
//          <polygon  data-name="Gauriganj" data-id="cns-185" id="_x31_85_1_" className="st0" points="656,651.8 669.3,645.8 675.2,652.5 675.3,674 659.8,676.8 646,673.3 "/>
//          <polygon  data-name="Jagdishpur(SC)" data-id="cns-184" id="_x31_84_1_" className="st0" points="669.3,645.8 656.3,630.2 642.7,620.8 627,629.2 624.8,633.8 627.3,635.5 649.5,640.8 656,651.8 "/>
//          <polygon  data-name="Unchahar" data-id="cns-183" id="_x31_83_1_" className="st2" points="598.3,699.3 608.8,693.5 594.3,680.8 602.8,675 580.8,675.3 577.3,671.8 562.8,676.8 547.8,675.8 584.8,692.3 595.8,702.3 "/>
//          <polygon  data-name="Sareni" data-id="cns-182" id="_x31_82_1_" className="st2" points="562.8,676.8 577.3,671.8 574.3,664.3 562,655.8 536,657.3 527,658.8 519.3,664.3 537.3,681.3 539,676.5 547.8,675.8 "/>
//          <polygon  data-name="Salon(SC)" data-id="cns-181" id="_x31_81_1_" className="st0" points="613,657.5 631.3,656.8 631.8,661.5 623.3,671.8 628.3,686.8 608.8,693.5 594.3,680.8 602.8,675 603,657.5 "/>
//          <polygon  data-name="Rae Bareli" data-id="cns-180" id="_x31_80_1_" className="st0" points="603,657.5 602.8,675 580.8,675.3 577.3,671.8 574.3,664.3 587.1,643.3 600.5,648.5 "/>
//          <polygon  data-name="Harchandpur" data-id="cns-179" id="_x31_79_1_" className="st2" points="574.3,664.3 587.1,643.3 577.5,639.5 555.5,628.3 555.7,643 536,642.3 536,657.3 562,655.8 "/>
//          <polygon  data-name="Tiloi" data-id="cns-178" id="_x31_78_1_" className="st0" points="627.3,635.5 649.5,640.8 656,651.8 646.2,673.8 631.8,661.5 631.3,656.8 622,640.5 624.8,633.8 "/>
//          <polygon  data-name="Bachhrawan(SC)" data-id="cns-177" id="_x31_77_1_" className="st2" points="579.5,610.3 600.8,616 606.5,641 600.5,648.5 577.5,639.5 555.5,628.3 557,620.3 "/>
//          <polygon  data-name="Mohanlalganj(SC)" data-id="cns-176" id="_x31_76_1_" className="st0" points="554.8,593 543,602.3 542,608.8 557,620.3 579.5,610.3 576.8,603 "/>
//          <polygon  data-name="Lucknow Cantt" data-id="cns-175" id="_x31_75_1_" className="st2" points="542.5,579.5 539,568 516.5,576.3 522.8,585 "/>
//          <polygon  data-name="Lucknow Central" data-id="cns-174" id="_x31_74_1_" className="st0" points="533.5,541.5 523.5,531.5 512.3,532.5 511,536.5 519.8,552 533,547.8 "/>
//          <polygon  data-name="Lucknow East" data-id="cns-173" id="_x31_73_1_" className="st0" points="510,554.3 504.3,560 516.5,576.3 524,573.3 527.5,558.8 533,547.8 "/>
//          <polygon  data-name="Lucknow North" data-id="cns-172" id="_x31_72_1_" className="st0" points="524,573.3 527.5,558.8 533,547.8 539,568 "/>
//          <polygon  data-name="Lucknow West" data-id="cns-171" id="_x31_71_1_" className="st0" points="504.3,560 492.3,553 494.5,539.5 511,536.5 520.3,551.4 510,554.3 "/>
//          <polygon  data-name="Sarojini Nagar" data-id="cns-170" id="_x31_70_1_" className="st0" points="519.3,591.8 496,596.3 480.8,590.5 482.8,569.5 504.3,560 522.8,585 "/>
//          <polygon  data-name="Bakshi Kaa Talab" data-id="cns-169" id="_x31_69_1_" className="st0" points="493.5,539.5 511,536.5 512.3,532.5 503.5,525.5 496.8,523.8 483.8,529.5 488,535 "/>
//          <polygon  data-name="Malihabad(SC)" data-id="cns-168" id="_x31_68_1_" className="st0" points="478.3,531.8 483.8,529.5 488,535 494.3,539.8 511,536.5 494.5,539.5 492.3,553 469,545 "/>
//          <polygon  data-name="Purwa" data-id="cns-167" id="_x31_67_1_" className="st0" points="518.5,611.8 517.8,618.3 541.8,628.5 555.7,641.7 555.5,628.3 557,620.3 542,608.8 520.3,602 "/>
//          <polygon  data-name="Bhagwantnagar" data-id="cns-166" id="_x31_66_1_" className="st0" points="514.5,626.8 517.8,618.3 541.8,628.5 555.7,641.7 555.7,643 536,642.3 516.3,632.8 "/>
//          <polygon  data-name="Unnao" data-id="cns-165" id="_x31_65_1_" className="st2" points="479.5,608.3 496,612.3 488,634 487,619.5 471,616.3 463,618.3 "/>
//          <polygon  data-name="Mohan(SC)" data-id="cns-164" id="_x31_64_1_" className="st2" points="495.5,612.5 517.8,618.3 520.3,602 519.3,591.8 496,596.3 480.8,590.5 495.8,602.3 "/>
//          <polygon  data-name="Safipur(SC)" data-id="cns-163" id="_x31_63_1_" className="st2" points="469.5,593 479.5,608.3 495.5,612.5 495.8,602.3 480.8,590.5 474.8,593 "/>
//          <polygon  data-name="Bangermau" data-id="cns-162" id="_x31_62_1_" className="st2" points="440.3,579.5 465,574.5 469.5,593 446.8,597.3 438.2,580 "/>
//          <polygon  data-name="Sandila" data-id="cns-161" id="_x31_61_1_" className="st2" points="475.3,547 492.3,553 504.3,560 482.8,569.5 467.5,563.3 462.8,565.3 460.8,557.8 469,545 "/>
//          <polygon  data-name="Balamau(SC)" data-id="cns-160" id="_x31_60_1_" className="st0" points="474.8,593 480.8,590.5 482.8,569.5 467.5,563.3 462.8,565.3 469.5,593 "/>
//          <polygon  data-name="Bilgram Mallanwan" data-id="cns-159" id="_x31_59_1_" className="st0" points="438.2,580 465,574.5 460.8,557.8 433.3,564.3 422.3,585.5 433.8,599.8 446.8,597.3 "/>
//          <polygon  data-name="Sandi(SC)" data-id="cns-158" id="_x31_58_1_" className="st2" points="434.5,529.8 422.5,543.5 433.3,564.3 460.8,557.8 478.3,531.8 468,512.8 437.8,525.8 "/>
//          <polygon  data-name="Gopamau(SC)" data-id="cns-157" id="_x31_57_1_" className="st2" points="472,520.3 478.3,531.8 497.5,524 474.3,494 473.5,478.3 463.5,468.3 458.5,473.3 463,493.5 468,512.8 "/>
//          <polygon  data-name="Hardoi" data-id="cns-156" id="_x31_56_1_" className="st2" points="429,520.8 437.8,525.8 468,512.8 463,493.5 451.5,497.5 429.8,503 422,504.3 424.5,515 "/>
//          <polygon  data-name="Shahabad" data-id="cns-155" id="_x31_55_1_" className="st0" points="429.8,503 451.5,497.5 463,493.5 458.5,473.3 463.5,468.3 439.8,467.5 440.8,471.7 414,483 417.5,487 422,504.3 "/>
//          <polygon  data-name="Sawayazpur" data-id="cns-154" id="_x31_54_1_" className="st0" points="424.5,515 417.5,487 414,483 402.3,474 401.3,478.8 391.1,492.3 402.5,506.1 401,521.3 "/>
//          <polygon  data-name="Misrikh(SC)" data-id="cns-153" id="_x31_53_1_" className="st0" points="503.5,525.5 512.3,532.5 523.5,531.5 533.5,541.5 533,547.8 542.3,544.8 546,542 553.3,532.8 548.8,515.3 524,513.5 519.8,511.3 497.5,513.3 491.5,516 497.5,524 "/>
//          <polygon  data-name="Sidhauli(SC)" data-id="cns-152" id="_x31_52_1_" className="st0" points="542.3,544.8 533,547.8 539,568 542.5,579.5 566.3,574.5 556.5,562.3 551.8,548.5 546,542 "/>
//          <polygon  data-name="Mahmoodabad" data-id="cns-151" id="_x31_51_1_" className="st0" points="546,542 551.8,548.5 556.5,562.3 566.3,574.5 570.3,563 580.5,531.5 553.3,532.8 "/>
//          <polygon  data-name="Sevata" data-id="cns-150" id="_x31_50_1_" className="st0" points="608.8,518.3 596,502 579,501 548.8,515.3 553.3,532.8 580.5,531.5 590,535.5 604.5,521 609,520 "/>
//          <polygon  data-name="Biswan" data-id="cns-149" id="_x31_49_1_" className="st0" points="524,513.5 548.8,515.3 565.5,507.5 559.5,502.8 554.8,492.8 515.5,494 519.8,511.3 "/>
//          <polygon  data-name="Laharpur" data-id="cns-148" id="_x31_48_1_" className="st0" points="594.8,500.3 591.8,485.3 590.5,480 554,459.8 554.8,492.8 559.5,502.8 565.5,507.5 579,501 596,502 "/>
//          <polygon  data-name="Hargaon(SC)" data-id="cns-147" id="_x31_47_1_" className="st0" points="541,493.5 554.8,492.8 554.3,470.5 554,459.8 535.8,463.8 506,470.8 506.5,488 515.5,494 "/>
//          <polygon  data-name="Sitapur" data-id="cns-146" id="_x31_46_1_" className="st0" points="497.5,513.3 519.8,511.3 515.5,494 506.5,488 482,503.8 491.5,516 "/>
//          <polygon  data-name="Maholi" data-id="cns-145" id="_x31_45_1_" className="st0" points="485,501.8 506.5,488 506,470.8 497,463.5 473.5,478.3 474.3,494 482,503.8 "/>
//          <polygon  data-name="Mohammdi" data-id="cns-144" id="_x31_44" className="st0" points="479.5,449.5 456,447.3 463.5,468.3 473.5,478.3 497,463.5 496.8,443.5 "/>
//          <polygon  data-name="Kasta(SC)" data-id="cns-143" id="_x31_43_2_" className="st0" points="456,447.3 444.8,446.3 437.3,450.5 439.8,467.5 463.5,468.3 "/>
//          <polygon  data-name="Lakhimpur" data-id="cns-142" id="_x31_42_1_" className="st0" points="535,442 513.5,446.3 496.8,443.5 497,463.5 506,470.8 535.8,463.8 555.3,460 553,452.8 551.3,439.5 "/>
//          <polygon  data-name="Dhaurahra" data-id="cns-141" id="_x31_41_1_" className="st0" points="573.8,421.5 590,448.5 592.5,464.3 590.5,480 555.3,460 553,452.3 549,424.8 "/>
//          <polygon  data-name="Sri Nagar(SC)" data-id="cns-140" id="_x31_40_1_" className="st0" points="513.5,446.3 551.3,439.5 549,424.8 544.5,422.5 524.8,419 504.8,423.3 494.8,431 496.8,443.5 "/>
//          <polygon  data-name="Gola Gokrannath" data-id="cns-139" id="_x31_39_1_" className="st0" points="474.5,403.3 481,395 494.3,415.8 504.8,423.3 494.8,431 496.8,443.5 479.5,449.5 445,446 465,423 "/>
//          <polygon  data-name="Nighasan" data-id="cns-138" id="_x31_38_1_" className="st0" points="544.5,422.5 524.8,419 518.5,404 524.8,396 542.5,379 561.8,386.5 573.8,421.5 549,424.8 "/>
//          <polygon  data-name="Palia" data-id="cns-137" id="_x31_37_1_" className="st0" points="530.5,373.3 509.3,361.3 499.5,356.3 492.8,368 482,363.5 474,383.5 494.3,415.8 504.8,423.3 524.8,419 518.5,404 524.8,396 542.5,379 "/>
//          <polygon  data-name="Dadraul" data-id="cns-136" id="_x31_36_1_" className="st0" points="417.7,481 440.8,471.7 439.8,467.5 437.3,450.5 410.3,445.8 391.7,434 371.8,443.3 368.3,457.5 387.8,463.5 402.3,474 414,483 "/>
//          <polygon  data-name="Shahjahanpur" data-id="cns-135" id="_x31_35_1_" className="st0" points="420.3,418.7 398.3,413 390.3,420.7 388.7,432 410.3,445.8 437.3,450.5 446,446.1 451.5,438.3 428.5,426.3 "/>
//          <polygon  data-name="Powayan(SC)" data-id="cns-134" id="_x31_34_1_" className="st0" points="437.8,393.8 429.8,402.8 428.5,426.3 445.3,436 451.5,438.3 465,423 474.5,403.3 471.8,397.3 456.5,399.3 "/>
//          <polygon  data-name="Tilhar" data-id="cns-133" id="_x31_33_1_" className="st0" points="398.3,394.7 437.8,393.8 429.8,402.8 428.5,425.4 427.6,425.4 420.3,418.7 398.3,413 "/>
//          <polygon  data-name="Jalalabad" data-id="cns-132" id="_x31_32_1_" className="st0" points="402.3,474 387.8,463.5 368.3,457.5 351.8,469.8 349.5,481 384.5,492.3 390.5,492.8 401.3,478.8 "/>
//          <polygon  data-name="Katra" data-id="cns-131" id="_x31_31_1_" className="st0" points="381,412 361.7,419.7 346.5,419.5 346,428 351.3,427 366.7,420.3 374.3,427.3 371.8,443.3 391.7,434 388.7,432 390.3,420.7 398.3,413 "/>
//          <polygon  data-name="Bisalpur" data-id="cns-130" id="_x31_30_1_" className="st0" points="390.8,363 388.8,377.8 388.7,388.3 398.3,394.7 437.8,393.8 431.3,387.8 426.5,377.3 406.8,378.5 395.3,367 "/>
//          <polygon  data-name="Puranpur(SC)" data-id="cns-129" id="_x31_29_1_" className="st0" points="442.5,339.3 428.5,350.8 421,364.5 431.3,387.8 437.8,393.8 456.5,399.3 471.8,397.3 474.5,403.3 481,395 474,383.5 482,363.5 469.8,352.8 449.3,340.3 "/>
//          <polygon  data-name="Barkhera" data-id="cns-128" id="_x31_28_1_" className="st0" points="425,347 413.8,333.8 409,332.5 394,336.3 390.5,362.8 406.8,378.5 426.5,377.3 421,364.5 428.5,350.8 "/>
//          <polygon  data-name="Pilibhit" data-id="cns-127" id="_x31_27_1_" className="st0" points="390.1,368.4 388.8,377.8 368,375.3 371.8,334.5 378.5,330 394,336.3 390.8,363 "/>
//          <polygon  data-name="Aonla" data-id="cns-126" id="_x31_26_1_" className="st0" points="305.2,389.7 313.2,401 327.5,415.3 346.5,419.5 339.8,408.2 338.3,404 334,387.3 324.3,393.7 308,383.2 304.2,387.3 "/>
//          <polygon  data-name="Bareilly Cantt" data-id="cns-125" id="_x31_25_1_" className="st0" points="370.7,402.3 381,412 398.3,413 398.3,394.7 388.7,388.3 370,399.7 "/>
//          <polygon  data-name="Bareilly" data-id="cns-124" id="_x31_24_1_" className="st0" points="353.7,387.7 360.3,399.3 370,399.7 388.7,388.3 388.8,377.8 368,375.3 354.8,380.8 "/>
//          <polygon  data-name="Bithari Chainpur" data-id="cns-123" id="_x31_23_1_" className="st0" points="339.8,408.2 346.5,419.5 361.7,419.7 381,412 370.7,402.3 370,399.7 360.3,399.3 338.3,404 "/>
//          <polygon  data-name="Faridpur(SC)" data-id="cns-122" id="_x31_22_1_" className="st0" points="334.2,390.2 338.3,404 360.3,399.3 353.7,387.7 338.5,386.5 334,387.3 "/>
//          <polygon  data-name="Nawabganj" data-id="cns-121" id="_x31_21" className="st0" points="353.7,387.7 354.8,380.8 343.3,378.8 338.5,386.5 "/>
//          <polygon  data-name="Bhojipura" data-id="cns-120" id="_x31_20_1_" className="st0" points="338.2,367.7 343.3,378.8 354.8,380.8 368,375.3 369.3,359 344.3,354.5 "/>
//          <polygon  data-name="Meerganj" data-id="cns-119" id="_x31_19_1_" className="st0" points="338.5,386.5 343.3,378.8 338.2,367.7 344.3,354.5 320.5,355 322.8,366.5 334,387.3 "/>
//          <polygon  data-name="Baheri" data-id="cns-118" id="_x31_18_1_" className="st0" points="368.5,334.8 359.8,324 354.3,322 347.8,321.3 328.5,337 320.5,355 344.3,354.5 369.3,359 371.8,334.5 "/>
//          <polygon  data-name="Dataganj" data-id="cns-117" id="_x31_17_1_" className="st0" points="351.3,427 366.7,420.3 374.3,427.3 371.7,444.3 368.3,457.5 351.8,469.8 349.5,481 333,476 343.7,470 353,439.3 346,428 "/>
//          <polygon  data-name="Shekhupur" data-id="cns-116" id="_x31_16_1_" className="st0" points="346,428 353,439.3 343.7,470 333,476 333,467.7 323.7,459 316.7,459.7 317.5,458.5 338.7,428 "/>
//          <polygon  data-name="Badaun" data-id="cns-115" id="_x31_15_2_" className="st0" points="311.3,410.7 323.7,420.3 325.3,421.7 338.7,428 346,428 351.3,427 346.5,419.5 327.5,415.3 313.2,401 "/>
//          <polygon  data-name="Bilsi" data-id="cns-114" id="_x31_14_1_" className="st0" points="325.3,421.7 338.7,428 316.7,459.7 295.7,451 283.3,445.7 311.3,410.7 "/>
//          <polygon  data-name="Sahaswan" data-id="cns-113" id="_x31_13_1_" className="st0" points="275.7,400.7 294.7,401.3 311.3,410.7 283.3,445.7 259.7,434.7 268,409.3 272.3,401.7 "/>
//          <polygon  data-name="Bisauli(SC)" data-id="cns-112" id="_x31_12_1_" className="st0" points="304.2,387.3 284.7,389 273.7,399 272.3,401.7 275.7,400.7 294.7,401.3 311.3,410.7 313.2,401 306.7,391.7 305.2,389.7 "/>
//          <polygon  data-name="Gunnaur" data-id="cns-111" id="_x31_11_1_" className="st0" points="224.7,396.3 244,420.7 259.7,434.7 268,409.3 272.3,401.7 250.7,390 243.5,382.3 227.3,389.3 "/>
//          <polygon  data-name="Karhal" data-id="cns-110" id="_x31_10_1_" className="st0" points="316,558 313.3,536 275.8,526.3 280.8,532.3 284.8,541.3 286.3,561.7 288,566.3 306.8,562.8 316.7,566 "/>
//          <polygon  data-name="Kishni(SC)" data-id="cns-109" id="_x31_09_1_" className="st2" points="359,563 365,552.5 360.8,545.5 333.8,546 313.3,536 316.7,566 329.3,561.3 355,567 "/>
//          <polygon  data-name="Bhongaon" data-id="cns-108" id="_x31_08_1_" className="st0" points="360.8,545.5 371,537.3 361.7,516 352.7,532.7 343.3,521.3 338.5,521.2 327.8,518 319.7,533.7 313.3,536 333.8,546 "/>
//          <polygon  data-name="Mainpuri" data-id="cns-107" id="_x31_07_1_" className="st2" points="319.7,533.7 328.7,517.3 304,509.3 300.8,505.3 292.8,516 275.8,526.3 313.3,536 "/>
//          <polygon  data-name="Jalesar(SC)" data-id="cns-106" id="_x31_06_1_" className="st0" points="261.3,518 257.3,501.3 240.7,490 209.7,512.3 219.7,514.7 225.5,515.3 235,514 251.7,516.3 "/>
//          <polygon  data-name="Marhara" data-id="cns-105" id="_x31_05_1_" className="st0" points="240.7,490 257.3,501.3 264,493.8 287.5,491.3 289,487.7 269.7,474 258.3,466.8 251.3,479 "/>
//          <polygon  data-name="Etah" data-id="cns-104" id="_x31_04_1_" className="st0" points="287.5,491.3 264,493.8 257.3,501.3 261.3,518 275.8,526.3 292.8,516 300.8,505.3 "/>
//          <polygon  data-name="Aliganj" data-id="cns-103" id="_x31_03_1_" className="st2" points="287.5,491.3 299.5,504.3 304,509.3 338.5,521.2 343.3,521.3 333.5,491.2 326.7,477.3 327.7,492.7 303.3,491.7 289,487.7 "/>
//          <polygon  data-name="Patiyali" data-id="cns-102" id="_x31_02_1_" className="st0" points="300.3,453 316.7,459.7 323.7,459 333,467.7 333,476 326.7,477.3 327.7,492.7 303.3,491.7 289,487.7 "/>
//          <polygon  data-name="Amanpur" data-id="cns-101" id="_x31_01_1_" className="st2" points="270,439.3 260,457 258.3,466.8 275.5,478 289,487.7 300.3,453 283.3,445.7 "/>
//          <polygon  data-name="Kasganj" data-id="cns-100" id="_x31_00_1_" className="st2" points="244,420.7 223.3,444.7 217.3,449 243,459.3 258.3,466.8 260,457 270,439.3 259.7,434.7 "/>
//          <polygon  data-name="Sirsaganj" data-id="cns-99" id="_x39_9_1_" className="st2" points="286.5,562.8 284.8,547.5 284.8,541.3 267.3,541.5 255,541 255,541.3 264.2,567.9 280.7,571 288,566.3 "/>
//          <polygon  data-name="Shikohabad" data-id="cns-98" id="_x39_8_1_" className="st2" points="255,541 231.5,544.8 232.5,548.8 249.3,564.8 263.8,567.8 "/>
//          <polygon  data-name="Firozabad" data-id="cns-97" id="_x39_7_1_" className="st2" points="231.5,544.8 255,541 249,530 236.5,526.3 224.8,527.8 "/>
//          <polygon  data-name="Jasrana" data-id="cns-96" id="_x39_6_1_" className="st0" points="280.8,532.3 275.8,526.3 261.3,518 255,516.8 249,530 255,541 263.4,541.5 284.8,541.3 "/>
//          <polygon  data-name="Tundla(SC)" data-id="cns-95" id="_x39_5_1_" className="st0" points="255,516.8 235,514 225.5,515.3 224.8,527.8 224.8,527.8 236.5,526.3 249,530 "/>
//          <polygon  data-name="Bah" data-id="cns-94" id="_x39_4_1_" className="st0" points="256,590.8 276.5,587.5 285,589 280.7,571 263.8,567.8 249.3,564.8 235.5,571.3 230.3,576.8 248.5,587.8 "/>
//          <polygon  data-name="Fatehabad" data-id="cns-93" id="_x39_3_1_" className="st0" points="208.8,567 221.5,572.5 213,578.3 223.5,584.8 230.3,576.8 235.5,571.3 249.3,564.8 232.5,548.8 213,546.8 181.5,554.8 202.5,572 "/>
//          <polygon  data-name="Kheragarh" data-id="cns-92" id="_x39_2_1_" className="st0" points="158.5,561.3 175.5,555 181.5,554.8 202.5,572 184.8,575.8 156.3,576.3 129.3,584 121.8,591.8 115.5,580 "/>
//          <polygon  data-name="Fatehpur Sikri" data-id="cns-91" id="_x39_1_1_" className="st0" points="148.5,524.5 170.3,527 171.5,533 181.5,554.8 175.5,555 154.9,562.8 128.5,550.3 "/>
//          <polygon  data-name="Agra Rural(SC)" data-id="cns-90" id="_x39_0_1_" className="st0" points="219.7,514.7 201.7,524.7 213,546.8 232.5,548.8 231.5,544.8 224.8,527.8 225.5,515.3 "/>
//          <polygon  data-name="Agra North" data-id="cns-89" id="_x38_9_1_" className="st0" points="194.3,493.7 175.1,500.8 175.8,509.6 171.5,517.3 171.7,517.3 200,509.7 "/>
//          <polygon  data-name="Agra South" data-id="cns-88" id="_x38_8_1_" className="st2" points="175.4,501 159.5,506.8 160,525.8 170.3,527 171.7,517.3 175.8,509.6 "/>
//          <polygon  data-name="Agra Cantt" data-id="cns-87" id="_x38_7_1_" className="st2" points="201.7,524.7 213,546.8 181.5,554.8 171.5,533 "/>
//          <polygon  data-name="Etmadpur" data-id="cns-86" id="_x38_6_1_" className="st0" points="200,509.7 171.7,517.3 170.3,527 171.5,533 201.7,524.7 219.7,514.7 "/>
//          <polygon  data-name="Baldev(SC)" data-id="cns-85" id="_x38_5_1_" className="st0" points="153,480.3 159.5,506.8 148.8,512.3 140.5,496 "/>
//          <polygon  data-name="Mathura" data-id="cns-84" id="_x38_4_1_" className="st0" points="153,480.3 140.5,496 148.8,512.3 126.5,503 111,489.5 133,478.7 "/>
//          <polygon  data-name="Goverdhan" data-id="cns-83" id="_x38_3_1_" className="st0" points="111,489.5 126.5,503 148.8,512.3 159.5,506.8 160,525.8 148.5,524.5 143.5,530.9 128.3,514.8 114.8,506.3 108.5,491 "/>
//          <polygon  data-name="Mant" data-id="cns-82" id="_x38_2_1_" className="st2" points="153,480.3 163.7,475.7 163,460.7 159.1,447.7 151.4,449.9 143.1,447.2 126.9,450.2 133,478.7 "/>
//          <polygon  data-name="Chhata" data-id="cns-81" id="_x38_1_1_" className="st0" points="113.7,454 101.7,464 105.3,483.7 108.5,491 133.1,479 126.9,450.2 "/>
//          <polygon  data-name="Sikandra Rao" data-id="cns-80" id="_x38_0_1_" className="st0" points="258.3,466.8 240.3,457.3 217.3,449 203,459.7 227,474 240.7,490 251.3,479 "/>
//          <polygon  data-name="Sadabad" data-id="cns-79" id="_x37_9_1_" className="st0" points="210.2,512.3 240.7,490 227,474 203,459.7 203,462 190.3,481.7 200,509.7 "/>
//          <polygon  data-name="Hathras(SC)" data-id="cns-78" id="_x37_8_1_" className="st2" points="194.3,493.7 190.3,481.7 179.3,479.3 159.5,506.8 "/>
//          <polygon  data-name="Iglas(SC)" data-id="cns-77" id="_x37_7_1_" className="st0" points="163.7,475.7 153,480.3 159.5,506.8 179.3,479.3 "/>
//          <polygon  data-name="Aligarh" data-id="cns-76" id="_x37_6_1_" className="st2" points="176,426.7 163.3,420.8 157.8,420.8 159,448 163,460.7 163.7,475.7 185.3,455 182.3,435.3 184,429.5 "/>
//          <polygon  data-name="Koil" data-id="cns-75" id="_x37_5_1_" className="st0" points="203,462 190.3,481.7 163.7,475.7 185.3,455 203,459.7 "/>
//          <polygon  data-name="Chharra" data-id="cns-74" id="_x37_4_1_" className="st0" points="182.3,435.3 185.3,455 203,459.7 223.3,444.7 209.5,429.5 197.8,436.8 184,429.5 "/>
//          <polygon  data-name="Atrauli" data-id="cns-73" id="_x37_3_1_" className="st2" points="209.5,429.5 222.2,443.8 223.3,444.7 244,420.7 236.5,411 217.5,426.3 "/>
//          <polygon  data-name="Barauli" data-id="cns-72" id="_x37_2_1_" className="st0" points="184,429.5 197.8,436.8 209.5,429.5 217.5,426.3 210.5,412.3 202,417 183,417.5 "/>
//          <polygon  data-name="Khair(SC)" data-id="cns-71" id="_x37_1_1_" className="st2" points="151.4,449.9 159.1,447.7 157.9,420.4 127.9,423.7 126.9,450.2 143.1,447.2 "/>
//          <polygon  data-name="Khurja(SC)" data-id="cns-70" id="_x37_0_1_" className="st0" points="163.3,420.8 178.5,428 184,429.5 183,417.5 175.5,395.3 174.5,393.5 161.3,395.3 155,397 156.5,415.5 157.8,420.8 "/>
//          <polygon  data-name="Shikarpur" data-id="cns-69" id="_x36_9_1_" className="st2" points="179.2,406.5 183,417.9 202.2,417 210.7,412.3 206,402.5 204.2,398.7 "/>
//          <polygon  data-name="Debai" data-id="cns-68" id="_x36_8_1_" className="st0" points="217.5,426.3 236.5,411 224.7,396.3 206,402.5 "/>
//          <polygon  data-name="Anupshahr" data-id="cns-67" id="_x36_7_1_" className="st0" points="206,402.5 224.7,396.3 227.3,389.3 210.5,384.5 199,385.8 "/>
//          <polygon  data-name="Syana" data-id="cns-66" id="_x36_6_1_" className="st0" points="210.5,384.5 227.3,389.3 217.3,368 208.8,362.5 195.3,356.7 190.7,353.7 192,372.5 199,385.8 "/>
//          <polygon  data-name="Bulandshahr" data-id="cns-65" id="_x36_5_1_" className="st0" points="199,385.8 185.2,389.3 178.5,391 174.5,393.5 179.2,406.5 190,403.3 204.2,398.7 "/>
//          <polygon  data-name="Sikandrabad" data-id="cns-64" id="_x36_4_1_" className="st0" points="178.5,391 199,385.8 192,372.5 190.7,353.7 175.7,364.3 174.5,393.5 "/>
//          <polygon  data-name="Jewar" data-id="cns-63" id="_x36_3_1_" className="st0" points="156.5,415.5 155,397 124.8,397.8 127.8,424 157.8,420.8 "/>
//          <polygon  data-name="Dadri" data-id="cns-62" id="_x36_2_1_" className="st0" points="161.3,395.3 174.5,393.5 175.7,364.3 157.3,372 153.3,372 142.5,370 146.8,384.5 155,397 "/>
//          <polygon  data-name="Noida" data-id="cns-61" id="_x36_1_1_" className="st0" points="146.8,384.5 142.5,370 133.7,373.3 126.3,372.2 118.8,384.8 124.8,397.8 155,397 "/>
//          <polygon  data-name="Garhmukteshwar" data-id="cns-60" id="_x36_0_1_" className="st0" points="195.3,356.7 210.7,363.7 217.3,368 209.5,346.3 202,326.3 196.5,328.8 186,331 174,335.7 190,345.3 190.7,353.7 "/>
//          <polygon  data-name="Hapur(SC)" data-id="cns-59" id="_x35_9_1_" className="st0" points="175.7,364.3 190.7,353.7 190,345.3 174,335.7 173.5,343 162,351.3 153.3,372 157.3,372 "/>
//          <polygon  data-name="Dhaulana" data-id="cns-58" id="_x35_8_1_" className="st0" points="153.3,372 162,351.3 173.5,343 153.8,339.3 150.3,333.3 147.3,352 142.8,359.3 138.5,361.2 142.5,370 "/>
//          <polygon  data-name="Modi Nagar" data-id="cns-57" id="_x35_7_1_" className="st0" points="119.7,330.3 142.8,359.3 147.3,352 150.3,333.3 137.7,332 "/>
//          <polygon  data-name="Ghaziabad" data-id="cns-56" id="_x35_6_1_" className="st0" points="133.7,373.3 142.5,370 138.5,361.2 126.2,366.3 126.3,372.2 "/>
//          <polygon  data-name="Sahibabad" data-id="cns-55" id="_x35_5_1_" className="st0" points="118.8,384.8 126.3,372.2 126.2,366.3 122.3,364.2 109.3,366.5 102.7,370.8 "/>
//          <polygon  data-name="Muradnagar" data-id="cns-54" id="_x35_4_1_" className="st0" points="142.8,359.3 133.3,347.3 119.7,330.3 118,345 124.8,359.5 122.3,364.2 126.2,366.3 "/>
//          <polygon  data-name="Loni" data-id="cns-53" id="_x35_3_1_" className="st0" points="109.3,366.5 122.3,364.2 124.8,359.5 118,345 105.8,342.5 95.2,340.5 93.2,343.7 107.3,354.2 "/>
//          <polygon  data-name="Baghpat" data-id="cns-52" id="_x35_2_1_" className="st0" points="118,345 123,305 129.3,294.8 113,290.3 108.5,286.5 113.5,317 104.8,325.3 92,322.5 91,333 95.2,340.5 112.7,343.8 "/>
//          <polygon  data-name="Baraut" data-id="cns-51" id="_x35_1_1_" className="st0" points="92,322.5 102.8,313.8 96.5,300.3 108.5,286.5 98.8,285.3 88,283 82,294.8 84.3,311 "/>
//          <polygon  data-name="Chhaprauli" data-id="cns-50" id="_x35_0_1_" className="st0" points="112.8,311 108.5,286.5 96.5,300.3 102.8,313.8 92.2,322.3 92.5,322.6 104.8,325.3 113.5,317 "/>
//          <polygon  data-name="Meerut South" data-id="cns-49" id="_x34_9_1_" className="st0" points="153.8,339.3 173.5,343 174,335.7 186,331 174.6,328 170,327.3 150.3,333.3 "/>
//          <polygon  data-name="Meerut" data-id="cns-48" id="_x34_8_1_" className="st0" points="150.7,333 150.7,332.8 160,323.8 167.5,307.8 186,331 185.7,331.1 174.3,327.9 170,327.3 151,333 "/>
//          <polygon  data-name="Meerut Cantt" data-id="cns-47" id="_x34_7_1_" className="st0" points="160,323.8 167.5,307.8 159,314 144.5,316 142.3,328 137.7,332 150.3,333.3 "/>
//          <polygon  data-name="Kithore" data-id="cns-46" id="_x34_6_1_" className="st2" points="167.5,307.8 186,331 196.5,328.8 202,326.3 195.8,310.5 186.5,312.3 "/>
//          <polygon  data-name="Hastinapur(SC)" data-id="cns-45" id="_x34_5_1_" className="st0" points="196,310.3 201.3,307 203.8,288.5 185.8,291 171.3,294.3 171.5,299.8 167.5,307.8 186.5,312.3 "/>
//          <polygon  data-name="Sardhana" data-id="cns-44" id="_x34_4_1_" className="st2" points="145,290.5 147.7,299.7 144.5,316 159,314 167.5,307.8 171.5,299.8 171.3,294.3 163.8,295.7 157.3,291 "/>
//          <polygon  data-name="Siwalkhas" data-id="cns-43" id="_x34_3_1_" className="st2" points="142.3,328 147.7,299.7 145,290.5 141.3,286.4 129.3,294.8 123,305 121.7,314 119.7,330.3 137.7,332 "/>
//          <polygon  data-name="Hasanpur" data-id="cns-42" id="_x34_2_1_" className="st0" points="214.8,361.8 227.3,389.3 243.5,382.3 236,353 234,342 220,344.5 209.5,346.3 "/>
//          <polygon  data-name="Amroha" data-id="cns-41" id="_x34_1_1_" className="st0" points="262.7,378.3 270.7,345.3 254.3,346.5 242,343.5 242.7,375 243.5,382.3 250.7,390 "/>
//          <polygon  data-name="Naugawan Sadat" data-id="cns-40" id="_x34_0_1_" className="st0" points="242,343.5 242.8,378.3 236,353 234.3,341.8 241.5,318.8 239.3,314.8 255.8,311.3 259.8,315.5 255.8,325 270.5,332.3 254.3,346.5 "/>
//          <polygon  data-name="Dhanaura(SC)" data-id="cns-39" id="_x33_9_1_" className="st0" points="203,328.5 209.5,346.3 234.3,341.8 241.5,318.8 239.3,314.8 223,314.3 217,314.5 201.3,307 195.8,310.5 "/>
//          <polygon  data-name="Milak(SC)" data-id="cns-38" id="_x33_8_1_" className="st2" points="324.3,393.7 334,387.3 322.8,366.5 312.5,372.5 307.8,373.2 308,383.2 "/>
//          <polygon  data-name="Rampur" data-id="cns-37" id="_x33_7_1_" className="st2" points="312.5,372.5 322.8,366.5 320.5,355 309.7,353.3 297,353.7 298.7,370.7 304,368 307.8,373.2 "/>
//          <polygon  data-name="Bilaspur" data-id="cns-36" id="_x33_6_2_" className="st0" points="347.8,321.3 328.5,337 320.5,355 309.7,353.3 305.3,333.3 332,309.7 "/>
//          <polygon  data-name="Chamraua" data-id="cns-35" id="_x33_5_1_" className="st0" points="332,309.7 331.7,304.3 317,297.3 311,302.5 306.5,309.5 302.3,320 305.3,333.3 "/>
//          <polygon  data-name="Suar" data-id="cns-34" id="_x33_4_1_" className="st2" points="315.8,296.5 299.5,298.3 285.5,311.3 288.5,318.5 306.5,309.5 311,302.5 317,297.3 "/>
//          <polygon  data-name="Sambhal" data-id="cns-33" id="_x33_3_1_" className="st0" points="298.7,370.7 297,353.7 295.8,335.5 282.5,344.8 285.3,353.7 287.7,374.7 "/>
//          <polygon  data-name="Asmoli" data-id="cns-32" id="_x33_2_1_" className="st2" points="285.3,353.7 287.7,374.7 279,386.7 262.7,378.3 270.7,345.3 282.5,344.8 "/>
//          <polygon  data-name="Chandausi(SC)" data-id="cns-31" id="_x33_1_1_" className="st0" points="273.7,399 284.7,389 279,386.7 262.7,378.3 250.7,390 272.3,401.7 "/>
//          <polygon  data-name="Bilari" data-id="cns-30" id="_x33_0_1_" className="st2" points="304,368 307.8,373.2 308,383.2 304.2,387.3 284.7,389 279,386.7 287.7,374.7 298.7,370.7 "/>
//          <polygon  data-name="Kundarki" data-id="cns-29" id="_x32_9_2_" className="st2" points="309.3,350 305.3,333.3 302.3,320 306.5,309.5 288.5,318.5 295.8,335.5 297,353.7 309.7,353.3 "/>
//          <polygon  data-name="Moradabad Nagar" data-id="cns-28" id="_x32_8_1_" className="st0" points="254.3,346.5 282.5,344.8 279.8,330.2 277,329.8 270.5,332.3 "/>
//          <polygon  data-name="Moradabad Rural" data-id="cns-27" id="_x32_7_1_" className="st0" points="279.8,330.2 282.5,344.8 295.8,335.5 285.7,311.7 277,329.8 "/>
//          <polygon  data-name="Thakurdwara" data-id="cns-26" id="_x32_6_1_" className="st0" points="296,289 284,285.5 273,293.1 267,304 285.7,311.7 299.5,298.3 "/>
//          <polygon  data-name="Kanth" data-id="cns-25" id="_x32_5_1_" className="st2" points="267.2,304.4 285.7,311.7 277,329.8 270.5,332.3 255.8,325 259.8,315.5 254.8,311.3 264.5,309.5 "/>
//          <polygon  data-name="Noorpur" data-id="cns-24" id="_x32_4_1_" className="st2" points="264.5,309.5 267.5,304.3 255.8,288.3 250.3,291.3 234.5,290 239.3,314.8 "/>
//          <polygon  data-name="Chandpur" data-id="cns-23" id="_x32_3_1_" className="st0" points="217,314.5 239.3,314.8 234.5,290 223.5,287.8 208.8,290 203.8,288.5 201.3,307 "/>
//          <polygon  data-name="Bijnor" data-id="cns-22" id="_x32_2_1_" className="st2" points="220.3,273.2 201.4,239.4 190.5,249.1 195.2,263.5 201.4,283.9 203.7,288.3 208.6,289.8 223.3,287.6 "/>
//          <polygon  data-name="Nehtaur(SC)" data-id="cns-21" id="_x32_1_1_" className="st0" points="234.2,289.8 249.9,291.1 255.4,288.1 249.6,275.7 240,270.9 220.3,273.2 223.3,287.6 "/>
//          <polygon  data-name="Dhampur" data-id="cns-20" id="_x32_0_1_" className="st0" points="273,292.6 271.3,278.7 255.4,268.2 240,270.9 249.6,275.7 255.4,288.1 267,304 "/>
//          <polygon  data-name="Barhapur" data-id="cns-19" id="_x31_9_1_" className="st0" points="284,285.5 306.3,265.3 266,250.8 254.3,237.5 239.8,251.8 244.8,258.5 257.8,256.4 255.4,268.2 271.3,278.7 273,293.1 "/>
//          <polygon  data-name="Nagina(SC)" data-id="cns-18" id="_x31_8_1_" className="st0" points="240,270.9 255.4,268.2 258.1,256.3 244.4,258.5 239.8,251.8 223.8,241.6 209.9,254.8 220.3,273.2 "/>
//          <polygon  data-name="Najibabad" data-id="cns-17" id="_x31_7_1_" className="st2" points="253.9,237.6 239.5,251.8 223.8,241.6 209.9,254.8 201.4,239.4 216.3,228 231.3,220.8 255.1,229 "/>
//          <polygon  data-name="Meerapur" data-id="cns-16" id="_x31_6_1_" className="st2" points="201.5,284 190.5,249 169.8,253 164.8,257.3 174.8,274.5 185.8,291 203.8,288.5 203.8,287.3 "/>
//          <polygon  data-name="Khatauli" data-id="cns-15" id="_x31_5_1_" className="st0" points="163.8,295.7 185.8,291 174.8,274.5 169.3,265 161.5,273.8 151.8,271 150.8,279.8 141.3,286.4 145,290.5 157.3,291 "/>
//          <polygon  data-name="Muzaffar Nagar" data-id="cns-14" id="_x31_4_1_" className="st0" points="161.5,273.8 169.3,265 164.8,257.3 148.5,249 147.8,262.8 151.8,271 "/>
//          <polygon  data-name="Purqazi(SC)" data-id="cns-13" id="_x31_3_1_" className="st0" points="187,245.5 184,231.5 169.3,237.3 148.5,249 164.8,257.3 169.8,253 190.5,249 190.1,248 "/>
//          <polygon  data-name="Charthawal" data-id="cns-12" id="_x31_2_1_" className="st2" points="151.8,271 147.8,262.8 148.5,249 144.3,243.3 130.8,241.5 121.8,263.8 130.3,268.5 "/>
//          <polygon  data-name="Budhana" data-id="cns-11" id="_x31_1_1_" className="st2" points="129.3,294.8 150.8,279.8 151.8,271 130.3,268.5 121.8,263.8 108.5,286.5 113,290.3 "/>
//          <polygon  data-name="Shamli" data-id="cns-10" id="_x31_0_1_" className="st0" points="108.5,286.5 121.8,263.8 116.8,264.3 111.8,260.8 101,258 101.3,270 98.8,285.3 "/>
//          <polygon  data-name="Thana Bhawan" data-id="cns-9" id="_x39__1_" className="st0" points="121.8,263.8 130.8,241.5 120.3,240.5 109.5,238.5 101,249.5 101,258 111.8,260.8 116.8,264.3 "/>
//          <polygon  data-name="Kairana" data-id="cns-8" id="_x38__1_" className="st0" points="85,238 80.8,247.5 85.3,267 88,283 98.8,285.3 101.3,270 101,249.5 109.5,238.5 98.5,235.8 87.5,235.5 "/>
//          <polygon  data-name="Gangoh" data-id="cns-7" id="_x37__1_" className="st0" points="91.5,217 83.3,226.3 87.5,235.5 98.5,235.8 120.3,240.5 130.8,241.5 125,230.5 120.5,215.8 93,211.8 "/>
//          <polygon  data-name="Rampur Maniharan(SC)" data-id="cns-6" id="_x36__1_" className="st0" points="160.8,216.6 155,208.8 147,210.8 144.3,212.3 120.5,215.8 125,230.5 130.8,241.5 136.3,234.3 149.8,220.8 161,217.5 "/>
//          <polygon  data-name="Deoband" data-id="cns-5" id="_x35__1_" className="st0" points="163.3,230.8 161,217.5 149.8,220.8 136,234.8 130.8,241.5 144.3,243.3 148.5,249 169.3,237.3 "/>
//          <polygon  data-name="Saharanpur" data-id="cns-4" id="_x34__1_" className="st2" points="157.8,202.8 163.5,193.5 150.3,192.5 148.3,184.5 137.8,185.8 129.3,196.3 127.8,199.5 142.3,199 147,210.8 155,208.8 "/>
//          <polygon  data-name="Saharanpur Nagar" data-id="cns-3" id="_x33__1_" className="st2" points="144.3,212.3 120.5,215.8 127.8,199.5 142.3,199 147,210.8 "/>
//          <polygon  data-name="Nakur" data-id="cns-2" id="_x32__1_" className="st0" points="93,211.8 120.5,215.8 129.3,196.3 137.8,185.8 136.8,182 122.5,177 116.8,184.8 107.5,189.8 102,192.3 94.3,201.3 "/>
       
//          <polygon  data-name="Behat" data-id="cns-1" id="_x31__1_"  points="140.5,149 140,159.5 122.5,177 136.8,182 137.8,185.8 148.3,184.5 150.3,192.5 163.5,193.5 170.3,186.3 185.5,167.5 156.3,155 149.3,148 "/>
        
//   </g>
 
//  </svg>
//  </span>
//  </div>

//     )
 }

 

export default Map
