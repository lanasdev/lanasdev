import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => [
        Rule.required().error("A skill name is required before publishing."),
        Rule.max(50).warning("Keep the skill name under 50 characters."),
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => [
        Rule.required().error("A slug is required to identify this skill."),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Development", value: "development" },
          { title: "E-Commerce", value: "ecommerce" },
          { title: "Automation", value: "automation" },
          { title: "Analytics", value: "analytics" },
        ],
        layout: "radio",
      },
      initialValue: "development",
      validation: (Rule) => [
        Rule.required().error("Pick a category so the skill can be grouped."),
      ],
    }),
    defineField({
      name: "proficiency",
      type: "string",
      options: {
        list: [
          { title: "Basic", value: "basic" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
        layout: "radio",
      },
      initialValue: "advanced",
      validation: (Rule) => [
        Rule.required().error(
          "Choose a proficiency level so visitors get useful context.",
        ),
      ],
    }),
    defineField({
      name: "logo",
      type: "image",
      description: "Optional logo for this skill (SVG/PNG preferred).",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          validation: (Rule) => [
            Rule.max(120).warning("Keep alternative text under 120 characters."),
          ],
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (Rule) => [
        Rule.max(220).warning("Keep description concise for cleaner listings."),
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower numbers appear first on the homepage.",
      validation: (Rule) => [
        Rule.integer().error("Order must be a whole number."),
        Rule.min(0).error("Order cannot be negative."),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      category: "category",
      proficiency: "proficiency",
      media: "logo",
    },
    prepare(selection) {
      const category = selection.category
        ? selection.category[0].toUpperCase() + selection.category.slice(1)
        : "Uncategorized";

      const proficiency = selection.proficiency
        ? selection.proficiency[0].toUpperCase() +
          selection.proficiency.slice(1)
        : "Unrated";

      return {
        title: selection.title || "Untitled skill",
        subtitle: `${category} · ${proficiency}`,
        media: selection.media,
      };
    },
  },
});
