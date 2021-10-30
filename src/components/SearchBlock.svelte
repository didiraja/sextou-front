<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import IconText from '@smui/textfield/icon';
	import Select, { Option } from '@smui/select';
  import IconSelect from '@smui/select/icon';
</script>

<div class="search-block mdc-elevation--z24">
  <Textfield label="Início" value="" variant="filled" class="mdc-elevation--z1">
    <IconText class="material-icons" slot="leadingIcon">event</IconText>
  </Textfield>

  <Textfield label="Fim" value="" variant="filled" class="mdc-elevation--z1">
    <IconText class="material-icons" slot="leadingIcon">event</IconText>
  </Textfield>

  <Select label="Região" value="" variant="filled" class="mdc-elevation--z1">
    <IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
    <Option value="" />
    <Option value="zn">Zona Norte</Option>
    <Option value="zs">Zona Sul</Option>
    <Option value="zo">Zona Oeste</Option>
  </Select>

  <Select label="Bairro" value="" variant="filled" class="mdc-elevation--z1">
    <IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
    <Option value="" />
    <Option value="lapa">Lapa</Option>
    <Option value="botafogo">Botafogo</Option>
    <Option value="iraja">Irajá</Option>
    <Option value="meier">Méier</Option>
  </Select>

  <Button variant="raised">
    <Label>Buscar</Label>
  </Button>
</div>

<style lang="scss">
  .search-block {
		background: #eff;
		background: linear-gradient(0deg, #a8a8a8 0%, #f7f7f8 100%);
		// width: 80vw;
		width: 100%;
    border-radius: 45px;
    margin: 0 auto;
		padding: 15px 30px;
		position: absolute;
		bottom: -40px;
	}
</style>