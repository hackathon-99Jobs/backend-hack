package model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Endereco {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	private String lougradouro;
	@NotNull
	private String cidade;
	@NotNull
	private String estado;
	@NotNull
	private Integer cep;
	@NotNull
	private String pais;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "estudante", referencedColumnName = "idEstudante", nullable = false)
	private Usuario idUsuario;
}
