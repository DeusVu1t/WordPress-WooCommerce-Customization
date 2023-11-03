<?php

function leonardo_customizer_register( $wp_customize )
{
  // $wp_customize->remove_section('title_tagline');
  $wp_customize->remove_section('colors');
  $wp_customize->remove_section('header_image');
  $wp_customize->remove_section('background_image');
  $wp_customize->remove_section('static_front_page');
  $wp_customize->remove_section('custom_css');

  // $wp_customize->add_section( 'starter_new_section_name' , array(
  //     'title'    => __( 'Visible Section Name', 'starter' ),
  //     'priority' => 30
  // ) );
  //
  // $wp_customize->add_setting( 'starter_new_setting_name' , array(
  //     'default'   => '#000000',
  //     'transport' => 'refresh',
  // ) );
  //
  // $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
  //     'label'    => __( 'Header Color', 'starter' ),
  //     'section'  => 'starter_new_section_name',
  //     'settings' => 'starter_new_setting_name',
  // ) ) );

}
add_action( 'customize_register', 'leonardo_customizer_register');
