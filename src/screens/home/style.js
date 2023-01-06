/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
 **/
import {StyleSheet} from 'react-native';
/* COMMON */
import {cStyles} from '~/utils/styles';
import {Colors} from '~/utils/colors';
import {Configs, Devices} from '~/config';
import {layoutWidth} from '~/utils/layout_width';

export default {
  con_content: cStyles.container,
  con_title_category: [
    cStyles.pv_5,
    cStyles.pr_10,
    !Configs.supportRTL
      ? [cStyles.br_tr_20, cStyles.br_br_20]
      : [cStyles.br_tl_20, cStyles.br_bl_20],
  ],

  img_header_logo: {height: '60%', width: '50%'},

  /** COUPON LIST */
  con_first_coupon_item: {paddingLeft: Devices.pH(layoutWidth.width)},
  con_last_coupon_item: {paddingRight: Devices.pH(layoutWidth.width)},
  con_coupons_item: cStyles.br_10,
  con_item_coupon: {width: Devices.sW('43%')},
  con_header_group: [
    cStyles.row_justify_between,
    cStyles.row_align_center,
    cStyles.pv_10,
  ],
  con_bg_blur: [
    cStyles.flex_full,
    {
      ...StyleSheet.absoluteFill,
      backgroundColor: 'rgba(0,0,0,.3)',
      zIndex: 1,
    },
  ],
  con_col_info: [cStyles.pt_5, {zIndex: 2}],
  con_info_coupon: {...StyleSheet.absoluteFill, zIndex: 2},

  txt_row_right_top: [
    cStyles.txt_base_item,
    {color: Colors.WHITE_COLOR, paddingTop: 5},
  ],
  txt_row_right_bottom: [
    cStyles.txt_base_item,
    {color: Colors.WHITE_COLOR, fontWeight: '600'},
  ],
  txt_coupon_title: [cStyles.txt_title_group, cStyles.pl_10],
  txt_coupon_show_all: [
    cStyles.txt_body_meta_item,
    cStyles.txt_italic,
    {color: Colors.PLACEHOLDER_COLOR},
    !Configs.supportRTL ? cStyles.pr_10 : cStyles.pl_10,
  ],
  txt_item_coupon_content: [cStyles.txt_title_item, {paddingVertical: 10}],

  img_coupon: [
    cStyles.br_10,
    {width: Devices.sW('43%'), height: Devices.sW('31%')},
  ],
  img_icon_coupon: {width: Devices.sW('8%'), height: Devices.sW('6%')},
};
