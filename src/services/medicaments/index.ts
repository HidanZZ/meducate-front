import apiClient from "src/axios/client"
import { Medicament } from "src/types/apps/medicament"

class MedicamentService {
  static async getAllMedicaments() {
    try {
      const response = await apiClient.get(`/medicaments`)

      return response.data
    } catch (err: any) {
      throw err
    }
  }

  static async getMedicamentByDenomination(nom: string) {
    try {
      const response = await apiClient.get<Array<Medicament>>(`/medicaments/medicament/${nom}`)

      return response.data
    } catch (err: any) {
      throw err
    }
  }

  static async getMedicamentByMolecule(substance: string) {
    try {
      const response = await apiClient.get(`/medicaments/molecule/${substance}`)

      return response.data
    } catch (err: any) {
      throw err
    }
  }

  static async getSimilarMedicamentsByDenomination(nom: string) {
    try {
      const response = await apiClient.get(`/medicaments/similar/${nom}`)

      return response.data
    } catch (err: any) {
      throw err
    }
  }

  static async getMedicamentById(id: string) {
    try {
      const response = await apiClient.get(`/medicaments/${id}`)

      return response.data
    } catch (err: any) {
      throw err
    }
  }

}


export default MedicamentService;