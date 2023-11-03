<div class="contact-form" id="formularz">
  <div class="content">
    <div class="section-title typo large">
      <?php the_sub_field('title');?>
    </div>
    <form action="<?php the_permalink(74);?>" method="post" id="contact-form">
      <div class="input-wrapper firstname">
        <input type="text" placeholder="Imię" name="your-firstname" id="your-firstname">
      </div>
      <div class="input-wrapper lastname">
        <input type="text" placeholder="Nazwisko" name="your-lastname" id="your-lastname">
      </div>
      <div class="input-wrapper date">
        <input type="text" placeholder="Termin imprezy" name="your-date" id="your-date">
      </div>
      <div class="input-wrapper phone">
        <input type="text" placeholder="Numer telefonu" name="your-phone" id="your-phone">
      </div>
      <div class="input-wrapper topic">
        <input type="text" placeholder="Temat" name="your-topic" id="your-topic">
      </div>
      <div class="input-wrapper message">
        <textarea placeholder="Treśc wiadomości" name="your-message" id="your-message"></textarea>
      </div>
      <div class="input-wrapper legal typo">
        <?php the_sub_field('legal');?>
      </div>
      <div class="input-wrapper submit">
        <div class="recaptcha" id="example1"></div>
        <div class="response typo" id="form-response"></div>
        <input type="submit" value="Wyślij formularz">
      </div>
    </form>
  </div>
</div>
