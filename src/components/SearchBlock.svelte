<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import IconText from '@smui/textfield/icon';
	import Select, { Option } from '@smui/select';
  import IconSelect from '@smui/select/icon';
</script>

<div class="search-block mdc-elevation--z24">
  <div class="grid-custom--main">

    <div class="wrapper">
      
        <Textfield label="Início" value="" variant="filled" class="mdc-elevation--z1 grid-cell">
          <IconText class="material-icons" slot="leadingIcon">event</IconText>
        </Textfield>
      
      
      
        <Textfield label="Fim" value="" variant="filled" class="mdc-elevation--z1 grid-cell">
          <IconText class="material-icons" slot="leadingIcon">event</IconText>
        </Textfield>
      
      
      
        <Select label="Região" value="" variant="filled" class="mdc-elevation--z1 grid-cell">
          <IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
          <Option value="" />
          <Option value="zn">Zona Norte</Option>
          <Option value="zs">Zona Sul</Option>
          <Option value="zo">Zona Oeste</Option>
        </Select>
      
      
      
        <Select label="Bairro" value="" variant="filled" class="mdc-elevation--z1 grid-cell">
          <IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
          <Option value="" />
          <Option value="lapa">Lapa</Option>
          <Option value="botafogo">Botafogo</Option>
          <Option value="iraja">Irajá</Option>
          <Option value="meier">Méier</Option>
        </Select>
      
    </div>
  </div>
  
  <div class="grid-custom--side">
    <Button variant="raised" class="btn-search">
      <Label>Buscar</Label>
    </Button>
  </div>
</div>

<style lang="scss">
  .search-block {
		background: #eff;
		background: linear-gradient(0deg, #a8a8a8 0%, #f7f7f8 100%);
		width: 100%;
    border-radius: 30px;
    margin: 0 auto;
		padding: 15px 10px;
    box-sizing: border-box;
		position: absolute;
		bottom: -180px;
    
    // Desktop
    // border-radius: 45px;
    // display: flex;
    // justify-content: space-between;
    
    
    .grid-custom--main {
      display:inline-block;
      width: 100%;
      
      .wrapper {
        display:flex;
        flex-wrap: wrap;

        // Desktop
        // justify-content: space-between;
      }
      
      :global(.grid-cell) {
        width: 47%;
        margin: 5px;

        // desktop
        // width:24.5%;
      }
    }
    
    .grid-custom--side {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 10px;

      :global(.btn-search) {
        width: 90%;
      }
    }
	}
</style>