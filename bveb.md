#2019.02.07
https://www.belveb.by/individual/kartochki/bezopasnost/blokirovka-kartochki/
* обновить стили с http://belveb.test.astronim.com/
* заменить код полей выбора даты (3 поля по аналогии)

		<div class="input flatpickr">
			<span class="label-title">Полная дата рождения *</span>
			<!--<input type="text" name="form_date_117" id="form_date_dMwJEks5" value="" size="0" />-->
			<!--<img src="/bitrix/js/main/core/images/calendar-icon.gif" alt="Выбрать дату в календаре" class="calendar-icon" onclick="BX.calendar({node:this, field:'form_date_dMwJEks5', form: 'SIMPLE_FORM_11', bTime: false, currentTime: '1549539045', bHideTime: false});" onmouseover="BX.addClass(this, 'calendar-icon-hover');" onmouseout="BX.removeClass(this, 'calendar-icon-hover');" border="0" /> (DD.MM.YYYY)-->
			
			<div class="input input--decorated">
				<input name="form_date_117" id="form_date_dMwJEks5" value="" type="text" placeholder="Выберите дату" data-input="">
			
				<svg class="input-calendar" viewBox="0 0 512 512" data-toggle>
					<use xlink:href="#ico-calendar"></use>
				</svg>
			
				<svg class="input-clear" viewBox="0 0 32 32" data-clear>
					<use xlink:href="#ico-close"></use>
				</svg>
			</div>
		</div>
		
* заменить код с чекбоксом

		<div class="input">
			<!--<span class="label-title">Кредитная карта </span>
			<input type="checkbox" id="139" name="form_checkbox_SIMPLE_QUESTION_198[]" value="139">
			<label for="139">да</label>-->
			<label><input type="checkbox" name="form_checkbox_SIMPLE_QUESTION_198[]" value="139" checked><span>Кредитная карта</span></label>
		</div>
		
* закомменченый куски можно удалить :)