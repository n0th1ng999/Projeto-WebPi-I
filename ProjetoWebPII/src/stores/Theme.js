import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useThemeStore = defineStore("Theme", () => {
	const Themes = ref(
		useLocalStorage("Themes", [
			{
				id: 1,
				name: "Tema 1",
			},
			{
				id: 2,
				name: "Tema 2",
			},
		])
	);

	/**
	 * @param {String} name name of new theme
	 */
	function CreateTheme(name) {
		Themes.value.push({
			id: Themes.value[Themes.value.length - 1].id + 1,
			name: name,
		});
	}

	/**
	 * @param {Object} ThemeObj id and theme name
	 */
	function ChangeTheme(ThemeObj) {
		let themeIndex = Themes.value.findIndex((theme) => theme.id == ThemeObj.id);
		Themes.value[themeIndex] = ThemeObj;
	}

	/**
	 * @param {Number} idTheme Theme Id
	 */
	function DeleteTheme(idTheme) {
		Themes.value = Themes.value.filter((theme) => theme.id != idTheme);
	}

	/**
	 * @type {Object} GetThemes returns all the themes
	 */
	const GetThemes = computed(() => {
		return Themes.value;
	});



	return {
		GetThemes,
	
		
		CreateTheme,
		ChangeTheme,
		DeleteTheme,
	};
});
