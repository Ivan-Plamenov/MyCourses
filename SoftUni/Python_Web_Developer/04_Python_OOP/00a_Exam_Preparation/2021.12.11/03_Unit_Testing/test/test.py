# 75 / 1000
import unittest
from project.team import Team


class TestTeam(unittest.TestCase):
    def setUp(self):
        self.team = Team("Lions")

    def test_constructor(self):
        self.assertEqual(self.team.name, "Lions")
        self.assertEqual(self.team.members, {})

    def test_name_setter_valid(self):
        self.team.name = "Tigers"
        self.assertEqual(self.team.name, "Tigers")

    def test_name_setter_invalid(self):
        with self.assertRaises(ValueError):
            self.team.name = "123"

    def test_add_member(self):
        result = self.team.add_member(John=30, Alice=25)
        self.assertEqual(result, "Successfully added: John, Alice")
        self.assertIn("John", self.team.members)
        self.assertIn("Alice", self.team.members)

    def test_remove_member_exists(self):
        self.team.add_member(John=30)
        result = self.team.remove_member("John")
        self.assertEqual(result, "Member John removed")
        self.assertNotIn("John", self.team.members)

    def test_remove_member_not_exist(self):
        result = self.team.remove_member("John")
        self.assertEqual(result, "Member with name John does not exist")

    def test_comparison_greater_than(self):
        other_team = Team("Tigers")
        self.team.add_member(John=30)
        self.assertTrue(self.team > other_team)

    def test_length(self):
        self.team.add_member(John=30, Alice=25)
        self.assertEqual(len(self.team), 2)

    def test_addition_of_teams(self):
        other_team = Team("Tigers")
        other_team.add_member(Bob=22)
        new_team = self.team + other_team
        self.assertEqual(new_team.name, "LionsTigers")
        self.assertIn("Bob", new_team.members)

    def test_str_representation(self):
        self.team.add_member(John=30)
        team_str = str(self.team)
        self.assertIn("Team name: Lions", team_str)
        self.assertIn("Member: John - 30-years old", team_str)


if __name__ == "__main__":
    unittest.main()
