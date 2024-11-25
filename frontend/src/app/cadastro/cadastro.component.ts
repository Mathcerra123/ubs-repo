import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nomecompleto = String;
  nomesocial = String;
  nomemae = String;
  nomepai = String;
  dt_nasc = Date;
  genero = String;
  nacionalidade = String;
  municipio_nascimento = String;
  etnia = String;
  frequenta_escola = String;
  escolaridade = String;
  situacao_familiar = String;
  estabelecimento_vinculo = String;
  estabelecimento_cadastro = String;

  deficiencia = String;
  deficiencia_visual = String;
  deficiencia_auditiva = String;
  deficiencia_motora = String;
  deficiencia_intelectual = String;

  dados_contato = String;
  celular = String;
  tel_residencial = String;
  tel_comercial = String;
  tel_contato = String;
  email = String;

  origem_endereco = String;
  dados_endereco = String;
  cpf = String;
  identidade = String;

}
