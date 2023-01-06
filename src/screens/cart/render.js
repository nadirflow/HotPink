/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import {
  View, FlatList, TouchableOpacity, Text
} from 'react-native';
import {
  Container, Title, Button, Body, Content, Footer,
  Item, Input
} from 'native-base';
import IconF from 'react-native-fontawesome-pro';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CText from '~/components/CText';
import CImage from '~/components/CImage';
import CLoading from '~/components/CLoading';
import CViewRow from '~/components/CViewRow';
import { BallIndicator } from '~/components/CIndicator';
/* COMMON */
import { Colors } from '~/utils/colors';
import { cStyles } from '~/utils/styles';
import { Languages, Assets, Configs, Devices } from '~/config';
import { layoutWidth } from '~/utils/layout_width';
import Currency from '~/utils/currency';
import Helpers from '~/utils/helpers';
/* STYLES */
import styles from './style';

const RenderProducts = (indexProduct, data, state, onRemove, onPressMinusAmount, onPressPlusAmount, onPressProduct) => {
  let price = Helpers.formatNumber((data.salePrice > 0 ? data.salePrice : data.price) * data.numberOfProduct);
  let currencyPosition = Configs.currencyPosition;
  let symbol = Helpers.symbolCurrency();
  let scaleImage = 1;
  if (data.images.length > 0) {
    scaleImage = data.images[0].sizes["woocommerce_thumbnail-width"] / data.images[0].sizes["woocommerce_thumbnail-height"]
  }

  let size = Devices.sImage("cart_detail", scaleImage);

  let label = "";
  if (data.variation && data.variation.attributes) {
    for (let std of data.variation.attributes) {
      label += `${std.option}, `;
    }
    label = label.substr(0, label.length - 2)
  }

  return (
    <CViewRow between style={[styles.con_products_content,
    indexProduct === 0 && { paddingTop: 0 }
    ]}
      leftComp={
        <CViewRow style={styles.con_products_item_left}
          leftComp={
            <TouchableOpacity onPress={() => onPressProduct(indexProduct)}>
              <CImage
                style={[styles.img_service, { width: size.width, height: size.height }]}
                source={data.images.length > 0 ? {
                  uri: data.images[0].sizes.woocommerce_thumbnail
                } :
                  data.images
                }
              />
            </TouchableOpacity>
          }
          rightComp={
            <View style={[styles.con_products_item_name, Configs.supportRTL && cStyles.column_align_end]}>
              <CText style={styles.txt_products_title} numberOfLines={2}>{data.name}</CText>
              {data.variation && data.variation.attributes &&
                <View style={[cStyles.row_align_center, cStyles.mt_5]}>
                  <CText style={styles.txt_products_option} i18nKey={'option'} />
                  <CText style={styles.txt_products_option}>
                    {": " + label}
                  </CText>
                  <CText style={styles.txt_products_option}>
                    {data.variation.attributes.length > 0 && data.variation.attributes[0].name}
                  </CText>
                </View>
              }

              {!data.sold_individually &&
                <View style={styles.con_amount_item}>
                  <View style={styles.con_amount_right}>
                    <IconF
                      name={"minus"}
                      size={Devices.fS(15)}
                      color={data.numberOfProduct === 1 ? Colors.PLACEHOLDER_COLOR : Colors.BLACK_COLOR}
                      type={"light"}
                      onPress={() => data.numberOfProduct === 1 ? null : onPressMinusAmount(indexProduct)}
                    />
                    <View style={styles.con_input_amount}>
                      <CText style={styles.txt_amount_item}>{data.numberOfProduct}</CText>
                    </View>
                    <IconF
                      name={"plus"}
                      size={Devices.fS(15)}
                      color={Colors.BLACK_COLOR}
                      type={"light"}
                      onPress={() => onPressPlusAmount(indexProduct)}
                    />
                  </View>
                </View>
              }
            </View>
          }
        />
      }
      rightComp={
        <View style={[styles.con_products_item_right,
        !Configs.supportRTL ? cStyles.column_align_end : cStyles.column_align_start
        ]}>
          <View style={cStyles.column_justify_start}>
            <IconF name={"times-circle"}
              size={Devices.fS(20)}
              color={Colors.RED_COLOR}
              type={"regular"}
              onPress={() => onRemove(data)} />
          </View>

          <View style={cStyles.flex_full} />

          <View style={cStyles.column_justify_end}>
            <View style={styles.con_price_product}>
              {currencyPosition === Currency.left &&
                <CText style={styles.txt_products_unit_left}>{symbol}</CText>}

              <CText style={styles.txt_products_price}>{price}</CText>

              {currencyPosition === Currency.right &&
                <CText style={styles.txt_products_unit_right}>{symbol}</CText>}
            </View>

            {(state._success && data.price_coupon > 0) &&
              <View style={[cStyles.row_align_center, cStyles.pt_5]}>
                {currencyPosition === Currency.left && <CText style={styles.txt_products_discount_unit_left}>
                  {data.price_coupon && symbol}
                </CText>}
                <CText style={styles.txt_products_discount_price}>{data.price_coupon}</CText>
                {currencyPosition === Currency.right && <CText style={styles.txt_products_discount_unit_right}>
                  {data.price_coupon && symbol}
                </CText>}
                <CText style={[styles.txt_products_discount_price, cStyles.pl_5]} i18nKey={'discount_lower'} />
              </View>
            }
          </View>
        </View>
      }
    />
  )
}

const RenderHeader = (title) => {
  return (
    <View style={[styles.con_header,
    Configs.supportRTL && cStyles.column_align_end,
    { marginHorizontal: Devices.pH(layoutWidth.width) }]}>
      <CText style={styles.txt_header_title} i18nKey={title} upperCase />
    </View>
  )
}

export const ViewCart = ({
  state = null,
  props = null,
  data = {
    totalProducts: 0
  },
  onFunction = {
    onPressBack: () => { },
    onPressOrder: () => { },
    onChangeText: () => { },
    onPressApply: () => { },
    onPressClear: () => { },
    onPressRemoveProduct: () => { },
    onPressMinusAmount: () => { },
    onPressPlusAmount: () => { },
    onPressProduct: () => { }
  }
}) => {
  let totalPrice = Helpers.formatNumber(state._totalPrice);
  let discountPrice = Helpers.formatNumber(state._discountPrice);
  let provisionalPrice = Helpers.formatNumber(state._provisionalPrice);
  let currencyPosition = Configs.currencyPosition;
  let symbol = Helpers.symbolCurrency();

  let priceCoupon = 0;
  if (state._coupon) priceCoupon = Helpers.formatNumber(Number(state._coupon.amount));

  return (
    <Container>
      <CHeader
        titleComponent={
          <Body style={styles.con_header_center}>
            <Title><CText style={cStyles.txt_title_header} i18nKey={'cart'} /></Title>
            {state._products.length > 0 &&
              <View style={[cStyles.row_align_center, cStyles.mt_5]}>
                <CText style={styles.txt_num_cart_header}>{data.totalProducts}</CText>
                <CText style={styles.txt_num_cart_header}>{" "}</CText>
                <CText style={styles.txt_num_cart_header} i18nKey={'items'} />
              </View>
            }
          </Body>
        }
        iconLeft_1={Configs.supportRTL ? "angle-right" : "angle-left"}
        iconRight_1={"none"}
        onPressLeft_1={onFunction.onPressBack}
      />

      {state._products.length > 0 ?
        <Content style={styles.con_content} showsVerticalScrollIndicator={false}>
          {!state._loadingCheckProducts &&
            <FlatList contentContainerStyle={[styles.con_list, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}
              data={state._products}
              renderItem={({ item, index }) =>
                RenderProducts(index,
                  item,
                  state,
                  onFunction.onPressRemoveProduct,
                  onFunction.onPressMinusAmount,
                  onFunction.onPressPlusAmount,
                  onFunction.onPressProduct
                )}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={styles.con_separator_option} />}
            />
          }

          <View style={styles.con_separator} />

          <View style={styles.con_discount}>
            <CViewRow style={[styles.con_discount_child, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}
              leftComp={
                <CViewRow style={{ flex: .6 }}
                  leftComp={
                    <IconF containerStyle={[Configs.supportRTL ? cStyles.ml_10 : cStyles.mr_10]}
                      name={"tags"}
                      color={Colors.PRIMARY_COLOR}
                      size={Devices.fS(25)}
                      type={"solid"} />
                  }
                  rightComp={
                    <View style={{ width: "90%" }}>
                      <Item style={styles.con_input} last error={state._error !== ""}>
                        <Input style={[styles.txt_coupon_input,
                        Configs.supportRTL && cStyles.txt_RTL
                        ]}
                          disabled={state._loadingCoupon}
                          placeholder={Languages[props.language].coupon_number}
                          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
                          value={state._couponCode}
                          onChangeText={(value) => onFunction.onChangeText(value)}
                          selectionColor={Colors.BLACK_COLOR}
                        />
                      </Item>
                      {state._error !== "" && <CText style={cStyles.txt_validate_error} i18nKey={state._error} />}
                    </View>
                  }
                />
              }
              rightComp={
                <View style={{ flex: .3 }}>
                  <Button style={[styles.con_btn_apply, { borderColor: Colors.PRIMARY_COLOR }]}
                    block disabled={state._loadingCoupon} onPress={onFunction.onPressApply}>
                    {state._loadingCoupon && <BallIndicator color={Colors.PRIMARY_COLOR} size={20} />}
                    {!state._loadingCoupon && <CText style={[styles.txt_btn, styles.txt_btn_apply]} i18nKey={"apply"} />}
                  </Button>
                </View>
              }
            />

            {state._success && state._coupon.discount_type === 'percent' &&
              <CViewRow style={[styles.con_coupon, { paddingHorizontal: Devices.pH(layoutWidth.width) }]} between
                leftComp={<View />}
                rightComp={
                  <CViewRow
                    leftComp={
                      <CText style={[styles.txt_summary_coupon_content,
                      Configs.supportRTL ? cStyles.ml_10 : cStyles.mr_10
                      ]}>- {priceCoupon}%</CText>
                    }
                    rightComp={
                      <IconF name={'times-circle'}
                        color={Colors.RED_COLOR}
                        size={Devices.fS(20)}
                        type={"regular"}
                        onPress={onFunction.onPressClear} />
                    }
                  />
                }
              />
            }

            {state._success && (state._coupon.discount_type === 'fixed_cart' ||
              state._coupon.discount_type === 'fixed_product') &&
              <CViewRow style={[styles.con_coupon, { paddingHorizontal: Devices.pH(layoutWidth.width) }]} between
                leftComp={<View />}
                rightComp={
                  <CViewRow
                    leftComp={
                      <View style={[styles.con_price_product,
                      Configs.supportRTL ? cStyles.ml_10 : cStyles.mr_10
                      ]}>
                        {currencyPosition === Currency.left && <CText style={styles.txt_products_unit_coupon_left}>{symbol}</CText>}
                        <CText style={styles.txt_summary_coupon_content}>{priceCoupon === 0 ? '-' : priceCoupon}</CText>
                        {currencyPosition === Currency.right && <CText style={styles.txt_products_unit_coupon_right}>{symbol}</CText>}
                      </View>
                    }
                    rightComp={
                      <IconF name={'times-circle'}
                        color={Colors.RED_COLOR}
                        size={Devices.fS(20)}
                        type={"regular"}
                        onPress={onFunction.onPressClear} />
                    }
                  />
                }
              />
            }
          </View>

          <View style={styles.con_separator} />

          <View style={styles.con_summary}>
            {RenderHeader("summary")}

            <CViewRow style={[styles.con_row_item, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}
              between
              leftComp={<CText style={styles.txt_summary_content} i18nKey={"total"} />}
              rightComp={
                <View style={styles.con_price_product}>
                  {currencyPosition === Currency.left && <CText style={styles.txt_products_unit_left}>{symbol}</CText>}
                  <CText style={styles.txt_products_price}>{state._totalPrice === 0 ? '-' : totalPrice}</CText>
                  {currencyPosition === Currency.right && <CText style={styles.txt_products_unit_right}>{symbol}</CText>}
                </View>
              }
            />

            <CViewRow style={[styles.con_row_item, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}
              between
              leftComp={<CText style={styles.txt_summary_content} i18nKey={"discount"} />}
              rightComp={
                <View style={styles.con_price_product}>
                  {state._discountPrice > 0 && currencyPosition === Currency.left && <CText style={styles.txt_products_unit_left}>{symbol}</CText>}
                  <CText style={styles.txt_products_price}>{state._discountPrice === 0 ? '-' : discountPrice}</CText>
                  {state._discountPrice > 0 && currencyPosition === Currency.right && <CText style={styles.txt_products_unit_right}>{symbol}</CText>}
                </View>
              }
            />

            <CViewRow style={[styles.con_row_item,
            { borderBottomWidth: 0, paddingHorizontal: Devices.pH(layoutWidth.width) }
            ]}
              between
              leftComp={<CText style={styles.txt_total_content} i18nKey={"provisional"} />}
              rightComp={
                <View style={[cStyles.row_align_center,
                Configs.supportRTL ? cStyles.row_justify_start : cStyles.row_justify_end,
                { flex: .6 }
                ]}>
                  {currencyPosition === Currency.left &&
                    <Text style={[styles.txt_group_right, styles.txt_group_subtotal, { color: Colors.PRIMARY_COLOR }]}>
                      {symbol}
                    </Text>
                  }
                  <Text style={[styles.txt_group_right, styles.txt_group_subtotal, { color: Colors.PRIMARY_COLOR }]}>
                    {provisionalPrice}
                  </Text>
                  {currencyPosition === Currency.right &&
                    <Text style={[styles.txt_group_right, styles.txt_group_subtotal, { color: Colors.PRIMARY_COLOR }]}>
                      {symbol}
                    </Text>
                  }
                </View>
              }
            />
          </View>
        </Content>
        :
        <>
          <Content contentContainerStyle={styles.con_no_products}>
            <CImage
              style={styles.img_no_products}
              source={Assets.image_cart}
            />
            <CText style={styles.txt_no_products} i18nKey={'no_data_on_cart'} />
          </Content>

          <Footer style={[styles.con_footer, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}>
            <Button block style={[styles.con_btn, { backgroundColor: Colors.PRIMARY_COLOR }]} onPress={onFunction.onPressBack} >
              <CText style={styles.txt_btn} i18nKey={'go_back_to_shopping'} />
            </Button>
          </Footer>
        </>
      }

      {state._products.length > 0 &&
        <Footer style={[styles.con_footer, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}>
          <Button block style={[styles.con_btn, { backgroundColor: Colors.PRIMARY_COLOR }]}
            disabled={state._loadingNextPage || state._loadingCheckProducts ? true : false}
            onPress={onFunction.onPressOrder} >
            {state._loadingNextPage || state._loadingCheckProducts ?
              <BallIndicator color={Colors.WHITE_COLOR} size={20} />
              :
              <CText style={styles.txt_btn} i18nKey={'proceed_to_checkout'} />
            }
          </Button>
        </Footer>
      }

      <CLoading visible={state._loadingCheckProducts || state._loadingNextPage} />
    </Container>
  )
}
